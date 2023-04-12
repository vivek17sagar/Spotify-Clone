const searchData = [
    {
        id: 0,
        songImage: "assests/images/Bairiya.jpg",
        songName: "Bairiya",
        songLink: "assests/Songs/Arijit_Singh__Bairiya___Amitabh_B____40goldiesohel____Gurfateh___Angira___Navjit_B___Official_Video(128k).mp3",
        songDuration: "4:28"
    },{
        id: 1,
        songImage: "assests/images/bedardiya.jpeg",
        songName: "Bedardeya",
        songLink: "assests/Songs/O_Bedardeya__Lyrical__Tu_Jhoothi_Main_Makkaar___Ranbir_2C_Shraddha___Pritam___Arijit_Singh___Amitabh_B(128k).mp3",
        songDuration: "5:32"
    },{
        id: 2,
        songImage: "assests/images/Apna.jpeg",
        songName: "Apna Bana Le",
        songLink: "assests/Songs/Apna_Bana_Le_-_Bhediya___Varun_Dhawan_2C_Kriti_Sanon__Sachin-Jigar_2C_Arijit_Singh_2C_Amitabh_Bhattacharya(128k).mp3",
        songDuration: "3:24"
    },{
        id: 3,
        songImage: "assests/images/jhoome.jpg",
        songName: "Jhoome Jo Pathaan",
        songLink:"assests/Songs/Jhoome_Jo_Pathaan_Song___Shah_Rukh_Khan_2C_Deepika___Vishal___Sheykhar_2C_Arijit_Singh_2C_Sukriti_2C_Kumaar(128k).mp3",
        songDuration: "3:22"
    },{
        id: 4,
        songImage: "assests/images/deva.jpeg",
        songName: "Deva Deva",
        songLink:"assests/Songs/Deva_Deva_-_Extended_Film_Version_Brahm_C4_81stra_Amitabh_B_Ranbir___40aliabhatt__40pritam7415__Arijit_Jonita(128k).mp3",
        songDuration: "5:51"
    },
    {
        id: 10,
        songImage: "assests/images/Naah.jpeg",
        songName: "Naah",
        songLink: "assests/Songs/Naah___Jass_Manak__Official_Video__Satti_Dhillon___Sharry_Nexus___Love_Song___GK_Digital___Geet_MP3(128k).mp3",
        songDuration: "3:33"
    },{
        id: 11,
        songImage: "assests/images/shoot.jpeg",
        songName: "Shoot Da Order",
        songLink: "assests/Songs/Shoot_Da_Order___Jass_Manak__Full_Song__Jagpal_Sandhu___Jayy_Randhawa___Punjabi_Songs___Geet_MP3(128k).mp3",
        songDuration: "3:25"
    },{
        id: 12,
        songImage: "assests/images/Adhi.jpeg",
        songName: "ADHI RAAT",
        songLink: "assests/Songs/ADHI_RAAT___Jass_Manak__Official_Video__Satti_Dhillon___Sharry_Nexus___GK_Digital___Geet_MP3(128k).mp3",
        songDuration: "3:48"
    },{
        id: 13,
        songImage: "assests/images/Gal.jpeg",
        songName: "Gal Sun",
        songLink: "assests/Songs/Gal_Sun___Jass_Manak__Full_Song__Jayy_Randhawa___Rajat_Nagpal___Geet_MP3(128k).mp3",
        songDuration: "3:05"
    },{
        id: 14,
        songImage: "assests/images/taur.jpeg",
        songName: "TAUR",
        songLink: "assests/Songs/TAUR___Jass_Manak__Official_Video__Satti_Dhillon_-_Ikky_-_GK_Digital_-_Geet_MP3_-_New_Punjabi_Song(128k).mp3",
        songDuration: "2:33"
    },
    {
        id: 15,
        songImage: "assests/images/yaalgaar.jpeg",
        songName: "YALGAAR",
        songLink: "assests/Songs/YALGAAR_-_CARRYMINATI_X_Wily_Frenzy(128k).mp3",
        songDuration: "3:14"
    },{
        id: 16,
        songImage: "assests/images/vardan.jpeg",
        songName: "VARDAAN",
        songLink: "assests/Songs/VARDAAN_-_CARRYMINATI_X_Wily_Frenzy(128k).mp3",
        songDuration: "5:24"
    },{
        id: 17,
        songImage: "assests/images/trigger.jpeg",
        songName: "TRIGGER",
        songLink: "assests/Songs/TRIGGER_-_CARRYMINATI_X_VIBGYOR(128k).mp3",
        songDuration: "3:03"
    },{
        id: 18,
        songImage: "assests/images/date.jpeg",
        songName: "Date Kar Le",
        songLink: "assests/Songs/Date_Kar_Le___CarryMinati___Romy___Dhiren___Shradha___Salim_-_Sulaiman___Merchant_Records(128k).mp3",
        songDuration: "2:46"
    },{
        id: 19,
        songImage: "assests/images/zindgi.jpeg",
        songName: "Zindagi",
        songLink: "assests/Songs/Zindagi_-_CARRYMINATI_X_Wily_Frenzy(128k).mp3",
        songDuration: "3:40"
    },
    {
        id: 20,
        songImage: "assests/images/mera.jpeg",
        songName: "Mera Na",
        songLink: "assests/Songs/SIDHU_MOOSE_WALA___Mera_Na__Official_Video__Feat._Burna_Boy___Steel_Banglez___Navkaran_Brar(128k).mp3",
        songDuration: "3:21"
    },{
        id: 21,
        songImage: "assests/images/leveles.jpeg",
        songName: "LEVELS",
        songLink: "assests/Songs/LEVELS_-_Official_Video___Sidhu_Moose_Wala_ft_Sunny_Malton___The_Kidd(128k).mp3",
        songDuration: "3:51"
    },{
        id: 22,
        songImage: "assests/images/goat.jpeg",
        songName: "GOAT",
        songLink: "assests/Songs/GOAT__Full_Video__Sidhu_Moose_Wala___Wazir_Patar___Sukh_Sanghera___Moosetape(128k).mp3",
        songDuration: "4:05"
    },{
        id: 23,
        songImage: "assests/images/callabosse.jpeg",
        songName: "Calaboose",
        songLink: "assests/Songs/Calaboose__Official_Video__Sidhu_Moose_Wala___Snappy___Moosetape(128k).mp3",
        songDuration: "5:19"
    },{
        id: 24,
        songImage: "assests/images/295.jpeg",
        songName: "295",
        songLink: "assests/Songs/295__Official_Audio____Sidhu_Moose_Wala___The_Kidd___Moosetape(128k).mp3",
        songDuration: "4:33"
    },
    {
        id: 20,
        songImage: "assests/images/humsafar.jpeg",
        songName: "Oh Humsafar Song",
        songLink: "assests/Songs/_Oh_Humsafar__Song___Neha_Kakkar_Himansh_Kohli___Tony_Kakkar___Bhushan_Kumar___Manoj_Muntashir(128k).mp3",
        songDuration: "3:26"
    },{
        id: 26,
        songImage: "assests/images/gham.jpeg",
        songName: "Gham Khushiyan",
        songLink: "assests/Songs/Gham_Khushiyan__Neha_Kakkar_2C_Arijit_Singh_2C_Rohanpreet_Singh___Rana_Sotal_2C_Adil_Shaikh__Bhushan_Kumar(128k).mp3",
        songDuration: "3:42"
    },{
        id: 27,
        songImage: "assests/images/sajana.jpeg",
        songName: "O Sajna",
        songLink: "assests/Songs/Neha_Kakkar__O_Sajna___Priyank_Sharma_2C_Dhanashree_Verma___Tanishk_Bagchi_2C_Jaani___Bhushan_Kumar(128k).mp3",
        songDuration: "4:06"
    },{
        id: 28,
        songImage: "assests/images/puchda.jpeg",
        songName: "PUCHDA HI NAHIN",
        songLink: "assests/Songs/PUCHDA_HI_NAHIN_-_Neha_Kakkar___Rohit_Khandelwal___Babbu___Maninder_B___MixSingh(128k).mp3",
        songDuration: "3:16"
    },{
        id: 29,
        songImage: "assests/images/barish.jpeg",
        songName: "Baarish Mein Tum",
        songLink: "assests/Songs/Baarish_Mein_Tum__Nehu-Rohu_Version__Neha_K_2C_Rohanpreet___Showkidd_2C_Harsh_2C_Samay_2C_Navjit___Bhushan_K(128k).mp3",
        songDuration: "4:20"
    }
]