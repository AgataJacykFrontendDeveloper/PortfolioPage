<template>
    <social-button>
    <a class="social" href="tel:+48661470335"><img class="social_media" src="/logo_whatsapp_telephone_handset_icon_143174.png"></a>
  </social-button>
    </template>
    <script>
    import SocialButton from '../../UI/DeafultButtons.vue'
    export default {
      components: {
        SocialButton
      }
    }
    </script>
        <style scoped>
        @media (max-width: 1400px) {
        img {
          width: 30px;
        }
      }
        </style>