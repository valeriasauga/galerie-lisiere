# Galerie LISIÈRE — version corrigée avec photographies

Site vitrine de galerie fictive, en **HTML, CSS et JavaScript**. Une page unique avec 7 sections, fidèle aux maquettes Figma desktop (1440 px) et mobile (440 px).

## Ouvrir le site

1. Décompressez l’archive ZIP.
2. Ouvrez le dossier `galerie-lisiere`.
3. Double-cliquez sur `index.html` pour ouvrir le site, ou ouvrez le dossier dans VS Code.

**Important :** gardez le dossier `images` au même niveau que `index.html` et `style.css`. Les images fonctionnent sans connexion Internet ; les polices Italiana et DM Sans sont chargées depuis Google Fonts lorsque la connexion le permet.

## Correction des sept sections

1. **Accueil :** contenu et photo conservés.
2. **Exposition :** image « Reliefs lunaires » et sa légende « Victoria Sauga · 2023 », sous l’image. L’illustration provient du visuel précédemment partagé pour le projet.
3. **Artiste :** portrait et texte conservés.
4. **Collection :** 3 œuvres sur ordinateur (Conversations chromatiques, L’horizon intérieur, Silences), 4 sur mobile (avec Ballet marin), comme sur Figma.
5. **À propos :** titre « Un lieu vivant, ouvert sur son époque. », mention « DEPUIS 1998 · NICE » ; photographie à gauche sur ordinateur.
6. **Votre visite :** aucun visuel, seulement les quatre colonnes Adresse, Horaires, Tarifs et Contact (deux colonnes sur mobile).
7. **Pied de page :** véritable logo, newsletter et œuvre « L’empreinte du mouvement » ; présentation adaptée au mobile.

## Images

Les images issues du ZIP fourni par l’utilisatrice sont stockées dans `images/`. Le dessin « Reliefs lunaires », déjà partagé précédemment dans le projet, y est ajouté sous `images/reliefs-lunaires.png`. L’ancienne image incorrecte de la section Exposition a été retirée du site.

## Fonctionnement et limites

- Menu mobile, navigation par ancres, liens de contact et itinéraire.
- Le formulaire de newsletter est **une démonstration**, sans service d’envoi d’e-mail ni stockage de données.
- **Attention :** la galerie est fictive ; les coordonnées, horaires et tarifs sont ceux indiqués dans Figma et ne constituent pas une véritable offre de visite.
- Les dates de l’exposition (2025) ont été conservées telles qu’elles figurent dans la maquette.

## Publier avec GitHub Pages

Mettez les fichiers et le dossier `images` à la racine d’un dépôt GitHub, puis activez `Settings > Pages > Deploy from a branch > main / root`.

## Nouvelle version responsive / accès sur téléphone

- Le **même `index.html`** s’adapte aux ordinateurs, tablettes et téléphones grâce aux media queries CSS.
- Les boutons du menu deviennent un **menu hamburger** sur les petits écrans et les tablettes.
- Les quatre œuvres sont visibles sur mobile, et trois seulement sur ordinateur, comme prévu dans les deux maquettes.
- Sur un très petit téléphone, la newsletter se réorganise pour éviter les chevauchements.
- Le fichier facultatif `galerie-lisiere-un-fichier.html` fourni à côté du ZIP contient le CSS, le JavaScript et les images intégrés : il permet une ouverture sans extraire une archive. Il ne remplace pas le projet source pour GitHub.
- Pour consulter le site facilement sur un téléphone **sans télécharger de fichiers**, publiez le dossier `galerie-lisiere` sur GitHub Pages puis ouvrez son URL dans Safari ou Chrome.

## Photos supplémentaires dans la version mobile

- Section Artiste : `artiste.jpg` et `img-0749.jpg` (photo IMG_0749 du ZIP original). La photo supplémentaire est masquée sur ordinateur.
- Section Collection : quatre œuvres en deux colonnes sur téléphone, dont `oeuvre-4.jpg` (*Ballet marin*) ; seulement trois œuvres sur ordinateur.

Le fichier autonome `galerie-lisiere-telephone.html` regroupe les images et le code dans un seul fichier pour consultation hors ligne sur certains téléphones. Pour un accès simple sur tous les mobiles, la publication sur GitHub Pages est recommandée.
