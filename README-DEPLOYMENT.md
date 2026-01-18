# 🚀 Déploiement avec Variables d'Environnement

## 📋 Étapes pour déployer avec vos clés

### 1️⃣ **Déployer sur Vercel**

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --prod
```

### 2️⃣ **Configurer les variables sur Vercel**

1. Allez sur [vercel.com](https://vercel.com)
2. Ouvrez votre projet → Settings → Environment Variables
3. Ajoutez ces variables :

```
VITE_SUPABASE_URL=votre_supabase_url
VITE_SUPABASE_ANON_KEY=votre_supabase_anon_key
VITE_EMAILJS_SERVICE_ID=votre_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_emailjs_public_key
```

### 3️⃣ **Redéployer automatiquement**

Les variables seront injectées automatiquement au build !

## 🔧 **Autres plateformes**

### Netlify

```bash
# Installer Netlify CLI
npm install netlify-cli -g

# Déployer avec variables
netlify deploy --prod --env VITE_SUPABASE_URL=valeur --env VITE_SUPABASE_ANON_KEY=valeur
```

### Railway/Render

1. Connectez votre repo GitHub
2. Allez dans Settings → Environment Variables
3. Ajoutez les mêmes variables

## ✅ **Vérification**

Après déploiement :

1. Ouvrez votre application
2. Remplissez le formulaire
3. Vérifiez que vous recevez l'email
4. Vérifiez les données dans Supabase

## 🔒 **Sécurité**

- **Jamais** mettre les vraies clés dans le code
- **Toujours** utiliser les variables d'environnement
- **Garder** .env dans .gitignore

Votre application fonctionne maintenant en production avec vos vraies clés !
