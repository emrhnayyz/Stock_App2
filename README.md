# Formik ve Yup

***“Build forms in React, without the tears.”***

Gözyaşları olmadan reactta formlşar oluşturun.

  *Jared Palmer, Creator of Formik.*

Formik, React uygulamalarında form yönetimini kolaylaştırmak için tasarlanmış bir kütüphanedir. Formik, form state yönetimini, değerlerin izlenmesini, hata mesajlarının görüntülenmesini ve formun sunucuya gönderilmesini kolaylaştıran bir dizi özelliği sağlar. Aynı zamanda formun değerlerini takip etmek, formun durumunu kontrol etmek ve formların yapısını düzenlemek için kullanışlı yardımcı işlevler sunar.

Yup ise form doğrulama kurallarını tanımlamak için kullanılan bir şema tabanlı doğrulama kütüphanesidir. Yup, formun alanlarını, gereklilikleri, veri türlerini, uzunluk sınırlamalarını, özel doğrulama işlevlerini vb. tanımlamak için kullanılır. Formun giriş değerlerini bu kurallara göre doğrular ve hata mesajları üretir.

Formik, React uygulamalarında form yönetimini kolaylaştıran bir kütüphanedir ve aşağıdaki avantajlara sahiptir:

1. Form State Yönetimi: Formik, form state yönetimini kolaylaştırır. Formunuzdaki giriş alanlarındaki değerleri, seçili seçenekleri ve diğer form durumunu izler ve günceller. Bu sayede form verilerini manuel olarak yönetmek zorunda kalmazsınız.
2. Değerlerin İzlenmesi: Formik, formdaki her bir giriş alanının değerini izler ve değişiklikleri algılar. Bu şekilde, kullanıcı formdaki herhangi bir alana giriş yaptığında veya bir değeri değiştirdiğinde anında geri bildirim alabilirsiniz.
3. Hata Mesajlarının Görüntülenmesi: Formik, formunuzdaki hata durumlarını kolayca ele almanıza olanak tanır. Hata mesajlarını görüntülemek için özel hata bileşenlerini kullanabilir ve formun doğrulama kurallarına uymayan girişlere anında geri bildirim verebilirsiniz.
4. Formun Sunucuya Gönderilmesi: Formik, formun sunucuya gönderilmesini kolaylaştırır. Formun verilerini sunucuya iletmek için gerekli işlemleri yapmanızı sağlar ve sunucu yanıtlarını yönetmenize olanak tanır.
5. Yardımcı İşlevler: Formik, formların yapısını düzenlemek ve kontrol etmek için kullanışlı yardımcı işlevler sunar. Örneğin, formun doğrulama durumunu kontrol etmek, giriş alanlarını temizlemek, formu sıfırlamak veya formu yeniden başlatmak gibi işlemleri kolaylıkla gerçekleştirebilirsiniz.

Yup form doğrulama kurallarını tanımlamak için kullanılan bir şema tabanlı doğrulama kütüphanesidir. Yup'un bazı özellikleri aşağıda açıklanmaktadır:

1. Şema Tanımlama: Yup ile form doğrulama kurallarını tanımlayabilirsiniz. Örneğin, alanların gerekliliğini, veri türünü, minimum/maximum uzunluğu, özel doğrulama işlevlerini vb. belirtebilirsiniz.
2. Doğrulama Kuralları: Yup, bir dizi doğrulama kuralını birleştirebilir ve bu kuralların formun alanlarına uygulanmasını sağlar. Örneğin, **`required()`** bir alanın boş geçilemez olduğunu belirtirken, **`email()`** bir alanın geçerli bir e-posta adresi olması gerektiğini belirtir.
3. Hata Mesajları: Yup, form doğrulama kurallarına uymayan girişler için hata mesajları üretir. Hata mesajlarını özelleştirebilir veya varsayılan hata mesajlarını kullanabilirsiniz.

<a href="https://github.com/jquense/yup">Yup document</a>
<a href="https://formik.org/">Formik document</a>

