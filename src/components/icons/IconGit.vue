<template>
<social-button>
<a class="social" href="https://github.com/AgataJacykFrontendDeveloper" target="_blank"><img class="social_media" src="/logo_github_icon_143196.png"></a>
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