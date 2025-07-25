const videos = [
  {
    id: "1",
    title: "Love Lurking (Trailer)",
    description: "Official trailer of Love Lurking featuring Yang Bingzhuo and Zhao Wanqing.",
    thumbnail: "https://res.cloudinary.com/dutxozfx7/video/upload/v1753235779/%E5%AE%9A%E6%A1%A3%E9%A2%84%E5%91%8A_TRAILER___%E5%AE%9A%E6%A1%A37.17_%E5%8D%B1%E5%A2%83%E6%81%8B%E7%9B%9F_%E9%BB%91%E5%B8%AE%E5%8D%A7%E5%BA%95%E6%9A%97%E6%8A%A4%E5%86%B7%E8%89%B3%E5%A5%B3%E5%8C%BB___%E6%81%8B%E7%88%B1%E6%BD%9C%E4%BC%8F_Love_Lurking_%E4%B8%BB%E6%BC%94_%E9%98%B3%E5%85%B5%E5%8D%93_%E8%B5%B5%E5%A4%95%E6%B1%90_1080p_ag9xpw.jpg",
    url: "https://res.cloudinary.com/dutxozfx7/video/upload/v1753235779/%E5%AE%9A%E6%A1%A3%E9%A2%84%E5%91%8A_TRAILER___%E5%AE%9A%E6%A1%A37.17_%E5%8D%B1%E5%A2%83%E6%81%8B%E7%9B%9F_%E9%BB%91%E5%B8%AE%E5%8D%A7%E5%BA%95%E6%9A%97%E6%8A%A4%E5%86%B7%E8%89%B3%E5%A5%B3%E5%8C%BB___%E6%81%8B%E7%88%B1%E6%BD%9C%E4%BC%8F_Love_Lurking_%E4%B8%BB%E6%BC%94_%E9%98%B3%E5%85%B5%E5%8D%93_%E8%B5%B5%E5%A4%95%E6%B1%90_1080p_ag9xpw.mp4"
  },
  {
    id: "2",
    title: "Qingchuan's Veil of Vengeance",
    description: "Epic Chinese drama clip with action scenes and Qingchuan story arc.",
    thumbnail: "https://res.cloudinary.com/dutxozfx7/video/upload/so_2/EP17-18_CLIP___%E5%A2%A8%E9%9D%92%E5%B7%9D%E6%89%8B%E5%88%83%E6%95%8C%E4%BA%BA_%E5%A4%BA%E5%9B%9E%E9%9D%92%E5%B7%9D%E9%95%87___%E9%9D%92%E5%B7%9D%E5%85%A5%E6%A2%A6_Qingchuan_s_Veil_of_Vengeance_%E4%B8%BB%E6%BC%94_%E9%83%AD%E6%99%93%E5%A9%B7_%E5%91%A8%E5%8E%86%E6%9D%B0_%E6%9D%A8%E9%A6%A5%E7%BE%BD_%E8%A2%81%E9%93%AD%E6%B3%BD_1080p_ljtzuz.jpg",
    url: "https://res.cloudinary.com/dutxozfx7/video/upload/v1753258729/EP17-18_CLIP___%E5%A2%A8%E9%9D%92%E5%B7%9D%E6%89%8B%E5%88%83%E6%95%8C%E4%BA%BA_%E5%A4%BA%E5%9B%9E%E9%9D%92%E5%B7%9D%E9%95%87___%E9%9D%92%E5%B7%9D%E5%85%A5%E6%A2%A6_Qingchuan_s_Veil_of_Vengeance_%E4%B8%BB%E6%BC%94_%E9%83%AD%E6%99%93%E5%A9%B7_%E5%91%A8%E5%8E%86%E6%9D%B0_%E6%9D%A8%E9%A6%A5%E7%BE%BD_%E8%A2%81%E9%93%AD%E6%B3%BD_1080p_ljtzuz.mp4"
  },
  {
    id: "3",
    title: "Eight Route Army vs Japanese Army",
    description: "Action clip showcasing Chinese drama war scenes and intense combat.",
    thumbnail: "https://res.cloudinary.com/dutxozfx7/video/upload/so_2/%E5%85%AB%E8%B7%AF%E5%86%9B%E5%AF%B9%E6%97%A5%E5%86%9B%E5%B0%8F%E9%98%9F%E8%BF%9B%E8%A1%8C%E4%BC%8F%E5%87%BB_%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E8%BF%99%E4%B9%88%E5%8B%87%E7%8C%9B%E7%9A%84%E6%89%93%E6%B3%95_%E9%AC%BC%E5%AD%90%E5%90%93%E7%9A%84%E8%85%BF%E8%BD%AF_actionmovies_%E6%8A%97%E6%97%A5%E5%89%A7_chinesedrama_shorts_1080p_beueo2.jpg",
    url: "https://res.cloudinary.com/dutxozfx7/video/upload/v1753258676/%E5%85%AB%E8%B7%AF%E5%86%9B%E5%AF%B9%E6%97%A5%E5%86%9B%E5%B0%8F%E9%98%9F%E8%BF%9B%E8%A1%8C%E4%BC%8F%E5%87%BB_%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E8%BF%99%E4%B9%88%E5%8B%87%E7%8C%9B%E7%9A%84%E6%89%93%E6%B3%95_%E9%AC%BC%E5%AD%90%E5%90%93%E7%9A%84%E8%85%BF%E8%BD%AF_actionmovies_%E6%8A%97%E6%97%A5%E5%89%A7_chinesedrama_shorts_1080p_beueo2.mp4"
  },
  {
    id: "4",
    title: "Tang Yi Dance Stage",
    description: "Performance showcasing emotional songs and traditional dance.",
    thumbnail: "https://res.cloudinary.com/dutxozfx7/video/upload/so_2/%E5%94%B1%E5%88%B0%E5%BF%83%E5%9D%8E%E9%87%8C%E5%8E%BB%E4%BA%86_%E8%B6%8A%E5%90%AC%E8%B6%8A%E4%B8%8A%E5%A4%B4_%E6%83%9C%E5%88%AB%E7%9A%84%E6%B5%B7%E5%B2%B8_%E5%94%90%E8%89%BA%E5%A4%A7%E8%88%9E%E5%8F%B0_%E8%89%BA%E8%B5%B7%E5%8E%BB%E8%BF%9C%E6%96%B9_%E5%94%90%E8%89%BA%E5%A4%A7%E8%88%9E%E5%8F%B0%E6%B5%B7%E9%80%89%E5%8F%B7_720p_nvddip.jpg",
    url: "https://res.cloudinary.com/dutxozfx7/video/upload/v1753258652/%E5%94%B1%E5%88%B0%E5%BF%83%E5%9D%8E%E9%87%8C%E5%8E%BB%E4%BA%86_%E8%B6%8A%E5%90%AC%E8%B6%8A%E4%B8%8A%E5%A4%B4_%E6%83%9C%E5%88%AB%E7%9A%84%E6%B5%B7%E5%B2%B8_%E5%94%90%E8%89%BA%E5%A4%A7%E8%88%9E%E5%8F%B0_%E8%89%BA%E8%B5%B7%E5%8E%BB%E8%BF%9C%E6%96%B9_%E5%94%90%E8%89%BA%E5%A4%A7%E8%88%9E%E5%8F%B0%E6%B5%B7%E9%80%89%E5%8F%B7_720p_nvddip.mp4"
  },
{
  id: "5",
  title: "Female Agent vs Japanese Soldiers",
  description: "Chinese action drama featuring a female agent taking down enemies.",
  thumbnail: "https://res.cloudinary.com/dutxozfx7/video/upload/so_2/%E5%A5%B3%E7%89%B9%E5%B7%A5%E4%B8%8E%E5%8D%A7%E5%BA%95%E9%85%8D%E5%90%88%E6%BC%94%E4%B8%80%E5%9C%BA%E6%88%8F_%E5%AE%8C%E7%BE%8E%E9%99%A4%E6%8E%89%E6%97%A5%E6%9C%AC%E9%AC%BC%E5%AD%90%E7%9A%84%E7%8B%97%E5%91%BD_actionmovies_%E6%8A%97%E6%97%A5%E5%89%A7_chinesedrama_shorts_1080p_yp7cir.jpg",
  url: "https://res.cloudinary.com/dutxozfx7/video/upload/v1753258643/%E5%A5%B3%E7%89%B9%E5%B7%A5%E4%B8%8E%E5%8D%A7%E5%BA%95%E9%85%8D%E5%90%88%E6%BC%94%E4%B8%80%E5%9C%BA%E6%88%8F_%E5%AE%8C%E7%BE%8E%E9%99%A4%E6%8E%89%E6%97%A5%E6%9C%AC%E9%AC%BC%E5%AD%90%E7%9A%84%E7%8B%97%E5%91%BD_actionmovies_%E6%8A%97%E6%97%A5%E5%89%A7_chinesedrama_shorts_1080p_yp7cir.mp4"
},
{
  id: "6",
  title: "Jisoo Behind the Scenes of Jump",
  description: "Jisoo behind-the-scenes video from Jump.",
  thumbnail: "https://res.cloudinary.com/dutxozfx7/video/upload/so_2/Jisoo_Behind_The_Scenes_of_Jump._jisoo_blissoo_blackpink_blackpink_deadline_720p_wrn43q.jpg",
  url: "https://res.cloudinary.com/dutxozfx7/video/upload/v1753272050/Jisoo_Behind_The_Scenes_of_Jump._jisoo_blissoo_blackpink_blackpink_deadline_720p_wrn43q.mp4"
},
{
  id: "7",
  title: "Korean Street Fashion Ep.1",
  description: "Exploring Korean street fashion trends by period.",
  thumbnail: "https://res.cloudinary.com/dutxozfx7/video/upload/so_2/%EC%8B%9C%EB%8C%80%EB%B3%84_%ED%95%9C%EA%B5%AD_%EA%B1%B0%EB%A6%AC_%ED%8C%A8%EC%85%98_1_Korean_street_fashion_by_period_Ep.1_1080p_okvthg.jpg",
  url: "https://res.cloudinary.com/dutxozfx7/video/upload/v1753285939/%EC%8B%9C%EB%8C%80%EB%B3%84_%ED%95%9C%EA%B5%AD_%EA%B1%B0%EB%A6%AC_%ED%8C%A8%EC%85%98_1_Korean_street_fashion_by_period_Ep.1_1080p_okvthg.mp4"
},
{
  id: "8",
  title: "Masoyinbo Episode 163",
  description: "Masoyinbo Episode One Hundred and Sixty-Three with Memunat Teslim.",
  thumbnail: "https://res.cloudinary.com/dutxozfx7/video/upload/so_2/Masoyinbo_Episode_One_Hundred_and_Sixty-_Three_with_Memunat_Teslim__1080p_ajq1t6.jpg",
  url: "https://res.cloudinary.com/dutxozfx7/video/upload/v1753285966/Masoyinbo_Episode_One_Hundred_and_Sixty-_Three_with_Memunat_Teslim__1080p_ajq1t6.mp4"
},
{
    id: "9",
    title: "Lísàbí: The Uprising",
    description: "Main trailer for Lísàbí: The Uprising.",
    thumbnail: "https://res.cloudinary.com/dutxozfx7/video/upload/so_2/L%C3%ADs%C3%A0b%C3%AD__The_Uprising___Main_Trailer_1080p_cuui5n.jpg",
    url: "https://res.cloudinary.com/dutxozfx7/video/upload/v1753285977/L%C3%ADs%C3%A0b%C3%AD__The_Uprising___Main_Trailer_1080p_cuui5n.mp4"
},
{
    id: "10",
    title: "QAUDRI on Masoyinbo Part 1",
    description: "QAUDRI on Masoyinbo Part 1 episode.",
    thumbnail: "https://res.cloudinary.com/dutxozfx7/video/upload/so_2/QAUDRI_ON_MASOYINBO_PART_1__1080p_h4mnli.jpg",
    url: "https://res.cloudinary.com/dutxozfx7/video/upload/v1753285978/QAUDRI_ON_MASOYINBO_PART_1__1080p_h4mnli.mp4"
},
{
    id: "11",
    title: "Aníkúlápó: Rise of the Spectre",
    description: "Official Netflix trailer for Aníkúlápó: Rise of the Spectre.",
    thumbnail: "https://res.cloudinary.com/dutxozfx7/video/upload/so_2/An%C3%ADk%C3%BAl%C3%A1p%C3%B3__Rise_of_the_Spectre___Official_Trailer___Netflix_1080p_b09jud.jpg",
    url: "https://res.cloudinary.com/dutxozfx7/video/upload/v1753285990/An%C3%ADk%C3%BAl%C3%A1p%C3%B3__Rise_of_the_Spectre___Official_Trailer___Netflix_1080p_b09jud.mp4"
},
{
    id: "12",
    title: "Jagun Jagun",
    description: "Jagun Jagun - Full Movie.",
    thumbnail: "https://res.cloudinary.com/dutxozfx7/video/upload/so_2/JAGUN_JAGUN_1080p_rprz7r.jpg",
    url: "https://res.cloudinary.com/dutxozfx7/video/upload/v1753286004/JAGUN_JAGUN_1080p_rprz7r.mp4"
},
{
    id: "13",
    title: "Bad Boys: Ride or Die",
    description: "Official trailer for Bad Boys: Ride or Die.",
    thumbnail: "https://res.cloudinary.com/dutxozfx7/video/upload/so_2/BAD_BOYS__RIDE_OR_DIE_Official_Trailer_HD___In_Cinemas_June_6___In_English_Hindi_Tamil_Telugu_1080p_zi1ek2.jpg",
    url: "https://res.cloudinary.com/dutxozfx7/video/upload/v1753286054/BAD_BOYS__RIDE_OR_DIE_Official_Trailer_HD___In_Cinemas_June_6___In_English_Hindi_Tamil_Telugu_1080p_zi1ek2.mp4"
},
{
    id: "14",
    title: "She Only Needs to Hear the Direction",
    description: "Action clip of sharpshooting scene.",
    thumbnail: "https://res.cloudinary.com/dutxozfx7/video/upload/so_2/She_only_needs_to_hear_the_direction_her_companion_reports_to_shoot.720p_j9g7sn.jpg",
    url: "https://res.cloudinary.com/dutxozfx7/video/upload/v1753286169/She_only_needs_to_hear_the_direction_her_companion_reports_to_shoot.720p_j9g7sn.mp4"
},
];

// Function to navigate to watch.html with safe URL parameters
function openVideo(id) {
  const params = new URLSearchParams({ id });
  window.location.href = `watch.html?${params.toString()}`;
}
