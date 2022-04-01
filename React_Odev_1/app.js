// axios kütüphanemizi import (içe aktarıyoruz) ediyoruz. 
import axios from "axios";

// async ile bir getData adında function (Fonksiyon) oluşturuyoruz. 
async function getData(number){

    // const date : user and post ile 2 adet degişken oluşturuyoruz. 
    // await (sıralı olması için) komutunu kullanıyoruz.
    // axios kütüphanesini kullanarak datalarımızı date : user & post degişkenlerimize atıyoruz. 
   const {data : user} = await axios("https://jsonplaceholder.typicode.com/users/"+ `${number}`)
   const {data : post} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+ `${number}`)

   /* Consol.log function (Fonksiyon) ile date : user & post  
   degişkenlerimize atadıgımız verileri console ekranına yazdırıyoruz */

   console.log(user);
   console.log(post);
}

export {getData}
