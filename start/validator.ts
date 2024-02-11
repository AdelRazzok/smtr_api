import vine, { SimpleMessagesProvider } from '@vinejs/vine'

vine.messagesProvider = new SimpleMessagesProvider({
  required: 'Le champ {{ field }} est obligatoire',
  email: 'Adresse email invalide',
  url: 'URL invalide',
  minLength: 'Le champ {{ field }} est trop court',
  maxLength: 'Le champ {{ field }} est trop long',
  unique: 'Le champ {{ field }} est indisponible',
})
