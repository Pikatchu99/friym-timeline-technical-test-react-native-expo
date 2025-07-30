# Friym Timeline

Une application mobile de type timeline développée avec **React Native (Expo)** et **TypeScript**.  
Elle affiche une liste de posts paginés depuis [DummyJSON](https://dummyjson.com/posts), avec gestion des likes/dislikes persistants, dark mode et support offline.

---

## Fonctionnalités

✅ Affichage d'une liste de posts (avatar, utilisateur, contenu, timestamp)  
✅ Pagination par lot de 10 avec **FlatList**  
✅ **Skeleton loader** pendant le chargement initial  
✅ **Pull-to-refresh** pour recharger les posts  
✅ Boutons **"J'aime" / "Je n'aime pas"** avec persistance locale (offline-first)  
✅ **Dark mode fonctionnel** basé sur Zustand + NativeWind  
✅ Mini Gestion d'erreur réseau avec affichage d'un message et mode offline  

---

## **Stack technique**

- **React Native 0.79.5 (Expo)**
- **TypeScript strict**
- **Zustand** (store + persistance offline via AsyncStorage)
- **NativeWind (Tailwind)** pour le style
- **React Navigation** (gestion de thèmes)
- **React Native Reanimated** (animations spring)

---

## ⚡ **Setup rapide**

### Cloner le projet
\`\`\`bash
git clone https://github.com/Pikatchu99/friym-timeline-technical-test-react-native-expo.git
cd friym-timeline
\`\`\`

### Installer les dépendances
\`\`\`bash
yarn install
\`\`\`

### Lancer le projet en local (Expo Go)
\`\`\`bash
yarn run start
\`\`\`
- Scanner le QR code avec **Expo Go (iOS/Android)**.
---

## **Gestion d'erreur réseau avec retry**

- Si l'API est inaccessible, l'app affiche **"Mode hors ligne - données locales affichées"**.  
---

## **Dark mode**

- Automatique via Zustand (\`theme: "light" | "dark"\`) et NativeWind.
- Bouton toggle dans le header pour switch manuel.

---

## Auto évaluation
- **Affichage des posts** : 15min (Installation de Axios, création du service, store Zustand, composant Post)
- **Styles** : 20min (Installation NativeWind - Tailwind, utilisation des classes)
- **Pagination** : 20min (FlatList, gestion de l'état, pagination par lot de 10)
- **Pull-to-refresh** : 5min (FlatList refreshControl)
- **Likes/Dislikes** : 30min (Store Zustand, persistance AsyncStorage, gestion des états)
- **Dark mode** : 15min (Zustand, NativeWind)
- **Animations** : 15min (Reanimated pour les likes/dislikes, animations de chargement)

## Auteur
- **Yémalin Modeste AGBANGLA** – [GitHub](https://github.com/pikatchu99)
