
---

# README - Guide pour modifier le site

### Bienvenue Marie!

Ce guide est là pour t'aider à faire des modifications simples sur le site. Ne t'inquiète pas, je vais tout expliquer clairement pour que tu puisses ajouter, modifier ou supprimer des textes, des photos, et d'autres éléments sans avoir besoin de connaître le développement web.

---

## 1. **Structure du projet**

Le site est principalement composé de 3 sections :
- **Créations** (les spectacles)
- **Troupe** (les artistes de la troupe)
- **Vidéos** (les vidéos YouTube)

### Où sont les fichiers ?

Toutes les images que tu veux afficher sur le site sont placées dans un dossier spécial appelé **`/public/img`**. Donc, si tu veux ajouter une photo d’un artiste ou d’un spectacle, il te faudra la mettre dans ce dossier.

- PS: je te conseil de mettre toutes tes photos au même dimension avant de les glisser dans le dossier pour que cela fasse plus joli sur le site
---

## 2. **Ajouter/Modifier/Supprimer du texte**

### Pour changer les titres ou descriptions des sections :

1. Ouvre le fichier principal du projet, **`app/page.tsx`**.
2. Cherche la section que tu veux modifier. Par exemple :
   - La section "Créations" commence avec le titre **"Créations"**.
   - La section "Troupe" commence avec le titre **"Troupe"**.

### Modifier un spectacle :

Les informations sur les spectacles sont dans ce format dans le fichier **`page.tsx`** :

```js
const spectacles: SpectacleType[] = [
  {
    id: 1,
    title: "Spectacle 1",
    date: "20 Septembre 2024",
    location: "Théâtre XYZ",
    imageUrl: "/img/nomdelimage.jpg",
    description: "Description du spectacle ici.",
  },
];
```

- **title** : C'est le titre du spectacle. Tu peux le changer directement ici.
- **date** : La date du spectacle.
- **location** : L’endroit où le spectacle se passe.
- **imageUrl** : C’est l’emplacement de l’image. Mets l'image dans **`/public/img`** et donne le nom ici, par exemple **`/img/monimage.jpg`**.
- **description** : La description du spectacle.

### Pour ajouter un nouveau spectacle :

1. Ajoute une nouvelle ligne dans la liste **`spectacles`** comme ceci :

```js
{
  id: 2, // Change l'ID à un numéro unique
  title: "Nouveau Spectacle",
  date: "1 Octobre 2024",
  location: "Nouvelle salle",
  imageUrl: "/img/nomnouvelleimage.jpg", // Assure-toi que l'image est bien dans /public/img
  description: "Ceci est une description du nouveau spectacle.",
},
```

### Pour supprimer un spectacle :

1. Supprime simplement la ligne correspondant au spectacle que tu ne veux plus.

---

## 3. **Ajouter/Modifier/Supprimer des photos**

### Pour changer une photo d’un artiste ou d’un spectacle :

1. Les images sont toutes placées dans **`/public/img`**. Si tu veux ajouter une nouvelle photo :
   - Copie et colle l’image dans ce dossier.
   - Ensuite, dans **`page.tsx`**, trouve la section qui utilise l'image (par exemple, un spectacle ou un artiste) et change l'emplacement comme ceci :

```js
imageUrl: "/img/nomdelimage.jpg",
```

2. Assure-toi que le nom de l'image correspond exactement à ce que tu as mis dans le dossier **`/img`**.

### Exemple pour un artiste de la troupe :

```js
const troupeMembers: TroupeMemberType[] = [
  {
    id: 1,
    name: "Artiste 1",
    imageUrl: "/img/photoartiste1.jpg",
    description: "Une description de cet artiste.",
  },
];
```

Pour ajouter un nouvel artiste, il suffit de copier le format ci-dessus et de le coller dans la liste.

---

## 4. **Changer les vidéos**

Les vidéos sont affichées à partir de YouTube. Voici comment les modifier :

### Ajouter une vidéo :

1. Dans **`page.tsx`**, trouve la partie qui s’appelle **`videoData`**. Elle ressemble à ceci :

```js
const videoData: VideoType[] = [
  { id: 1, title: "Vidéo 1", url: "https://www.youtube.com/embed/wrFsapf0Enk" },
];
```

- **title** : Le titre de la vidéo.
- **url** : Le lien de la vidéo YouTube. Copie simplement l’adresse de la vidéo YouTube que tu veux afficher. Attention : l'URL doit suivre ce format : **`https://www.youtube.com/embed/`** suivi de l'ID de la vidéo.

### Supprimer une vidéo :

1. Supprime simplement l’entrée de la vidéo que tu ne veux plus dans la liste.

---

## 5. **Changer les icônes des réseaux sociaux**

Les icônes des réseaux sociaux sont en bas du site. Si tu veux changer les liens ou ajouter de nouveaux réseaux sociaux :

1. Trouve la section **`<footer>`** dans **`page.tsx`**.
2. Remplace les liens ici :

```js
<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
```

Change **`https://facebook.com`** par le lien vers la page Facebook de l'association, par exemple.

---

## 6. **Derniers conseils**

- **N'oublie pas d’enregistrer tes modifications** après chaque changement.
- **Images** : Assure-toi que toutes les images que tu ajoutes sont bien placées dans **`/public/img`**.
- **Vérification** : Pour voir tes changements, actualise simplement la page dans ton navigateur.

---

Avec ce guide, tu devrais pouvoir faire toutes les modifications basiques sur le site. Si jamais tu es bloquée, n’hésite pas à demander !

Bonne chance ! 😊

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---
