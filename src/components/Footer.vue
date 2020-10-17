<template>
  <div class="app__footer">
    <div class="app__footer-angle"/>
    <div class="app__footer-content-wrapper">
      <v-container class="app__footer-content transparent">
        <v-row class="pb-15 app__footer-row justify-center mx-auto">
          <v-col cols="12" sm="12" md="12" lg="3" xl="3">
            <div>
              <v-img
                src="@/assets/logo.svg"
                alt="Best Service"
                max-width="230"
                class="ma-auto"
                style="z-index: 10;"
              />
              <a
                href="https://www.facebook.com/BestServiceTL"
                style="text-decoration-color: #232055"
                target="_blank"
              >
                <div
                  class="text-center blue--text pt-6 font-weight-bold"
                >
                  <span>Besøk oss på Facebook</span>
                </div>
              </a>
            </div>
          </v-col>
          <v-col cols="12" sm="4" md="4" lg="3" xl="3" class="app__footer-list">
            <div>
              <ul>
                <li>
                  <h3 class="blue--text">Tjenester</h3>
                </li>
                <li>
                  <router-link
                    to="/transport"
                  >
                    <span class="blue--text">Transport</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/lager"
                  >
                    <span class="blue--text">Lager</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/avfall"
                  >
                    <span class="blue--text">Avfall og makulering</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" sm="4" md="4" lg="3" xl="3" class="app__footer-list">
            <div>
              <ul>
                <li>
                  <h3 class="blue--text">Snarveier</h3>
                </li>
                <li>
                  <router-link
                    to="/#tjenester"
                  >
                    <span class="blue--text">Tjenester</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/#om-oss"
                  >
                    <span class="blue--text">Om oss</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/#kontakt"
                  >
                    <span class="blue--text">Kontakter</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/#skjema"
                  >
                    <span class="blue--text">Send mail</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" sm="4" md="4" lg="3" xl="3" class="app__footer-list">
            <div>
              <ul>
                <li>
                  <h3 class="blue--text">Ta kontakt</h3>
                </li>
                <li>
                  <router-link
                    to="/#tjenester"
                  >
                    <span class="blue--text">Kjørekontor</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/#kontakt"
                  >
                    <span class="blue--text">Postboks</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/#kontakt"
                  >
                    <span class="blue--text">Sentraltelefon</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
        <v-divider />
        <v-row>
          <v-col>
            <p
              class="text-center blue--text app__footer-copyright pt-5 mb-2"
            >Copyright 2020 Best Service All Rights Reserved
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'Footer'
})
export default class Footer extends Vue {
}
</script>

<style scoped lang="scss">
  .app__footer {
    position: relative;
    overflow: hidden;
    z-index: 4;
    &:after {
      content: '';
      width: 280px;
      height: 280px;
      position: absolute;
      right: -116px;
      z-index: 0;
      top: 0;
      background-image: url("~@/assets/images/blob2.svg");
      background-position: center;
      background-size: contain;
      transform: rotate(-160deg);
    }
    .app__footer-content-wrapper {
      background: #f1faff;
      background: linear-gradient(180deg, #f1faff 0%, #ffffff 100%);

      .app__footer-content {
        position: relative;

        .app__footer-list {
          ul {
            list-style-type: none;
            padding-left: 0;
            padding-top: 0.5rem;
            margin: 0 auto;
            width: min-content;
            span {
              white-space: nowrap;
            }
          }
          a {
            text-decoration: none;
            &:hover {
              text-decoration: underline;
              text-decoration-color: #232055;
            }
          }
          div {
            justify-content: center;
          }
        }
        .app__footer-copyright {
          font-weight: 500;
        }
        &:after {
          content: '';
          width: 450px;
          height: 450px;
          position: absolute;
          left: -320px;
          bottom: -80px;
          background-image: url("~@/assets/images/blob3.svg");
          background-position: center;
          background-size: contain;
        }
      }
    }
    .app__footer-angle {
      position: relative;
      height: 200px;
      z-index: 0;
      overflow-y: hidden;
      background: #ecf8ff;
      background: linear-gradient(180deg, #ecf8ff 0%, #f1faff 100%);

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        height: 75%;
        background-color: white;
        background-size: contain;
        transform: skewY(2deg);
        transform-origin: 100%;
      }
    }
  }
  @media (max-width: 1903px) {
    .app__footer .app__footer-angle::after {
      transform: skewY(3deg);
    }
  }
  @media (max-width: 1263px) {
    .app__footer .app__footer-angle::after {
      transform: skewY(4deg);
    }
    .app__footer-list ul {
      margin: 0 !important;
      width: 100% !important;
    }
    .app__footer-row {
      max-width: 550px;
    }
  }
  @media (max-width: 959px) {
    .app__footer .app__footer-angle::after {
      transform: skewY(5deg);
    }
  }
  @media (max-width: 500px) {
    .app__footer .app__footer-angle::after {
      transform: skewY(7deg);
    }
    .app__footer-list ul {
      padding-left: 3rem;
    }
  }
</style>
