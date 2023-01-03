var youtubeList = document.getElementById('youtube-list');

let dataList = [
    {
        "titre": "Le chef Otaku",
        "description": "Attention, sur la chaîne Menu Manga, on a affaire à un sacré passionné, capable de parler pendant 20 minutes d’une série d’une manière très argumentée. Il parle aussi pas mal de séries animées.",
        "lien": "https://www.youtube.com/embed/hruLH9hjwDc"
    },
    {
        "titre": "Selvarion Senpai",
        "description": "Romuald est un fou furieux de culture japonaise et donc de manga ! Et en plus, il publie régulièrement des vidéos. Une chaîne très intéressante.",
        "lien": "https://www.youtube.com/embed/qCablUZUC5A"
    },
    {
        "titre": "Au rayon mangas ",
        "description": "Il s’appelle Johnny Benoit et ses vidéos ont un sacré style. Vrai passionné, il publie régulièrement des vidéos toujours bien construites. A découvrir !",
        "lien": "https://www.youtube.com/embed/zySes0YD7zo"
    },
    {
        "titre": "Manga news ",
        "description": "Manga-News suit l’actualité des mangas avec notamment des petits journaux avec les dernières infos.",
        "lien": "https://www.youtube.com/embed/--dXZ6FE6NM"
    },
    {
        "titre": "Tay Otaku Mangas",
        "description": "Voici une toute nouvelle chaîne. Tay Otaku Manga sort depuis quatre mois une à deux vidéos par semaine sur les mangas et c’est pas mal du tout !",
        "lien": "https://www.youtube.com/embed/1adAPUzvnNI"
    },
    {
        "titre": "Afro Roshi",
        "description": "Voici un pro sur les animés avec lui vous êtes sur à 100% rigoler, ces video sont drôles et très intéressantes.Il trouve toujours un moyen de vous rire à travers des même des blagues et je sais encore.Bref, il est pas mal du tout.",
        "lien": "https://www.youtube.com/embed/Cpxn10hUXVo"
    },
];

dataList.forEach( function (data) {
    // Création de la balise <article>
    let article = document.createElement('article');
    // Création de la balise <div class="details">
    let details = document.createElement('div');
    details.classList.add('details');

    // Création du titre h2
    let title = document.createElement('h2');
    title.append(data.titre);

    // Création de la description
    let description = document.createElement("p");
    description.classList.add("description");
    description.append(data.description);
    
    // On ajoute titre puis description dans détails
    details.append(title);
    details.append(description);

    // Création de la balise <iframe>
    let video = document.createElement("iframe");
    video.setAttribute('width', '100%');
    video.setAttribute('height', '400px');
    video.setAttribute('src', data.lien);
    video.setAttribute('title', 'video ' + data.titre);
    video.setAttribute('frameborder', '0');
    video.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    video.setAttribute('fullscreen', true);

    // Création de la balise video
    let blockVideo = document.createElement("div");
    blockVideo.classList.add("vid");
    blockVideo.append(video);
   
    article.append(details);
    article.append(blockVideo);
    youtubeList.append(article);
});
