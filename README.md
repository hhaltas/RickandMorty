# RickandMorty

1) İlk olarak react navigaion yapısı ve gerekli sayfaların Stack oluşturmadan eklenmesi ayarlandı.
React-Navigation paketler kurulumu ve gerekli yerlere eklenemsi sağlandı.

2) Sayfalara veri gönderilmesi için redux kurulumu yapıldı.

3) Klasör yapısı ayarlandı ve alta klasörlere bölme işlemi yapıldı.
    src ->  assets
            components
            config
            navigation
            redux

4) Reduxta Home sayfasında characterler için api ile axios'la veriler alındı. Bunun action ve reducer , ana değişkenleri eklendi.

5)Apıden aldığımız verileri Flatlist ile gösterimi yapıldı boş için data gösterimi yapıldı.Bunun genel tasarımı üstünde eklemeler yapıldı

6)Character sayfasında search araması için component ve bu filtrelemesi için reduxta action,reducer yazıldı. Search yapısı için teiklenmesi ve bunları tasarımı ayarlandı

7)Episode için yukardaki 4-5-6 adımlar tekrar uygulandı.

8)Favori sayfasının ekleme ve silme işlemi için action ve reducer yazıldı ve bunların Flatlist ile gösterimi sağlandı.

9)ios ve androidde tasarımdalardaki farklılıkları giderildi.

10) Aksiyonlar ve bunların çalışmalarındaki değişimleri test edildi.

11) Beni en çok Apiden aldığımız yeni data için filtrelerme sorunu tekrar api kullarak yaptım burada mantık hatam olduğunu düşünüyorum. Kafamda kurduğum ilk yapıyı ayarladım. Filtreleme mantığımın hatalı olduğunu düşünüyorum. Tekrar incelenmesi gerekli.



