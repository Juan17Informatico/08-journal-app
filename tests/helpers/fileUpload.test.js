import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'dtkmbmr5d',
    api_key: '941129956775536',
    api_secret: 'YGkdL5BUzLgCMtyf24YomFUDngg',
    secure: true, 
});

describe('Pruebas en fileUpload', () => {

    test('debe de subir el archivo correctamente a cloudinary', async() => {
        
        const imageUrl = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
        const resp = await fetch(imageUrl); 
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);

        expect(typeof url).toBe('string'); 

        const segments = url.split('/'); 
        const imageId = segments[ segments.length - 1 ].replace('.png', '');

        const cloudResp = await cloudinary.api.delete_resources(imageId, {
            resource_type: "image",
          });
          console.log({cloudResp});

    }); 

    test('debe de retornar null', async() => {

        const file = new File([], 'foto.jpg'); 
        const url = await fileUpload( file );

        expect( url ).toBe(null); 

    });
    
})