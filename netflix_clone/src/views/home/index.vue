<template>
  <v-container fluid class="pa-0 ma-0">
    <v-img
      class="imgFundoPrincipal"
      gradient="(200deg, rgba(0, 0, 0, 0) 0.50%, #000000 71.04%)"
    >
    <titulo class="pb-10"/>
    <obras
      class="pt-10"
      :obras="itemsUm"
      titulo="Séries de terror e ficção cientifíca"
    />
    <obras
      class="pt-5"
      :obras="itemsDois"
      titulo="Em alta"
    />
    <obras
      class="pt-5"
      :obras="itemsTres"
      titulo="Obras de época aclamadas pela crítica"
    />
    <obras
      class="pt-5"
      :obras="itemsQuatro"
      titulo="Programas de TV sombrio para adolescentes"
    />
    <obras
      class="pt-5"
      :obras="itemsCinco"
      titulo="Séries aclamadas pela crítica"
    />
    </v-img>
    <v-footer
    padless
    color="black"
    class="d-flex justify-center"
  >
  <v-card
      flat
      tile
      color="black"
      width="60%"
      class="secondary--text text-start"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-row class="caption font-weight-light pa-0 ma-0">
      <v-col cols="3">
        Audidescrição
      </v-col>
      <v-col cols="3">
        Central de ajuda
      </v-col>
      <v-col cols="3">
        Cartão pré-pago
      </v-col>
      <v-col cols="3">
        Imprensa
      </v-col>
      <v-col cols="3">
        Relação com investidores
      </v-col>
      <v-col cols="3">
        Carreiras
      </v-col>
      <v-col cols="3">
        Termos de uso
      </v-col>
      <v-col cols="3">
        Privacidade
      </v-col>
      <v-col cols="3">
        Avisos legais
      </v-col>
      <v-col cols="3">
        Preferência de cookies
      </v-col>
      <v-col cols="3">
        Informações corporativas
      </v-col>
      <v-col cols="3">
        Entre em contato
      </v-col>
      <v-col class="pa-2 ml-2 mt-5" cols="2" style="border: 1px solid #ccc; ">
        Código do serviço
      </v-col>
      <v-col cols="12">
        &copy; 1997-2023 Netflix, Inc.
      </v-col>
      </v-row>
    </v-card>
  </v-footer>
  </v-container>
</template>

<script>
import titulo from '../../components/titulo'
import obras from '../../components/obras'

export default {
  name: 'Home',

  components: {
    titulo,
    obras
  },

  data () {
    return {
      itemsUm: [
        {
          title: 'Filme 1',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZvUcJ56xd0UH0atq244i0LLLtPljDqDzGu1250JZUmhAK7PvTXZCk1vwYg5lgtoL3CHrKNtJkqGAAzsVtil2KhD-6_43p5xxGb81iaRwGOYIVpWED6yloNAQ9l-JTbCaUZm.jpg?r=e31',
          isActive: true,
          class: 'enolaHolmes'
        },
        {
          title: 'Final Space',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfmH5ZiLFisBI1URrwT9QzrzL8oFv4epFdivvcRYBt3tFIOGO4GyZLn8SwlgwAuxRh6ub_SLopqx7rIPfXU7eOUOH_o55UMCEhwLdQis6E4uB_0MuvVnXFeqaAB1WKD-GXin.jpg?r=488',
          isActive: false,
          class: 'bright'
        },
        {
          title: 'Filme 3',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABT5nAe-W4_4i5k7kZUb2kv3fVa9IeC3RrUkMHokh5aZgFm-o5BStVAOF1ESbLloKqPjG2hYE59EzRQrkLzr_VI0zz9zB7-7kJiLUCBxJj6LEUgGk2u1jO2yGLIEwqR28Z5FD.jpg?r=2f0',
          isActive: false,
          class: 'strangerThings'
        },
        {
          title: 'Filme 4',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABR9kIPCgupq1F2e2Mk9UUi-_T63t1x55z3ZCmz-x9qYTmGyyoIgUuivCP0U6aX7U0-8LwOUeP6JggshsiOG3GljBxeKf7LzvGV903-4DG5JM-AvaAH60ySIy3SAR5LwIQOzY.jpg?r=ad5',
          isActive: false,
          class: 'te'
        },
        {
          title: 'Filme 5',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABa1tzuogsK5vcrPTuOSI2PIKm-RLlsnj7HIKQtcX22LQR1uUvWBnDBOaTwzL-WyGWsEaYNhTQ9V7d2Y6mrIcwbi9vJF5z3i4OAP-XQ_LtMCJfwAZjCuWfhTe0W_Gxtnr-XOQ.jpg?r=044',
          isActive: false,
          class: 're'
        },
        {
          title: 'Filme 1',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABakBgzCBU4xabMrvv1ZEcUvYHM8aA_02yEorWE8-MRqqRpwcuDim5wzGk9PMAAmcuz3H73dfBpZ-ayvojozdN3VwB7rT8yJoiTHivkdoKWMqZfbOhvpU4jx91tYBXa8iZYy-.jpg?r=dd8',
          isActive: false
        },
        {
          title: 'Filme 6',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYlwhXI8S8r5dTPGmXgeB6dnehikMOhtlnnb8kDO32B2qC2DAylO5R2pmwDmp0NB6-GCCCU9yqg7S7Zwb-7bIENclQ0lAItPQIZfHRviZ8az4oX7G1lNob2UqL9F8vwAHTHT.jpg?r=f8c',
          isActive: false
        },
        {
          title: 'Filme 7',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABc6Z2JqfUaOJ9UNXXMADBiLLaHWtB5wArrG9aMAxfgr9Qeou_lzhD5YCeI46IqiaRmqV7VhtnwZ4O8LCZTW9VOWDgjFFR0wYrEEofyUgo86TrQycZdtkCMtznmqUgc9echwQ.jpg?r=817',
          isActive: false
        },
        {
          title: 'Filme 8',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZRZIg6BnarsEpc7NUPhUfdL0Kq5D-xnpaxgLZ7yQoCkZPq7vGqbaC9rLGkywZHORC10vU0V2L14Wq-Bt2Lrut8SWFA237Wujwu51XusH-CFWuBjnBuO6NPyDBZkZNSQVnoG.jpg?r=710',
          isActive: false
        },
        {
          title: 'Filme 9',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV1FwObraHN7akDm_XJ2doCzAdpR7ZmG713ZpzDWxG0dHhnEykdI9XE6HjJZHwflpSQi7wHgNj6oHaoFum0qhSGGUSDZnZ8LRZqykmn6WnbcDlrte_sWYG4RsbEMI2TbnG53.jpg?r=bd8',
          isActive: false
        },
        {
          title: 'Filme 10',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbWEC79DmCvNEfl6ttzPSACO2tOqA3dC9s2xVCqVqh0R5hpjWxfTO7HqUUyLErqCb2ksSNJQ9tufGnYKT0pqunKa2nrn6I4GsrUTf4qWmDGlC6KZHe-W1umBowZavl89sJTN.jpg?r=a6b',
          isActive: false
        },
        {
          title: 'Filme 11',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdporPniMl37s2TC80f9Lq2PgILG19ApQSNnOVjNykLjezh_2A1itkBL0G3a45jE8HkzBj8SyvCn_jDzVugkoSLQfqZzL5ribhg.webp?r=265',
          isActive: false
        },
        {
          title: 'Filme 12',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb8ZRAxlGflLZCiv839mZr2gzMOnoss3FvIey7Qmrmu32aJTLKlPMO3H1N4vjfp8mPU2sXnMICujoMweiBvgVM7hgqNbzhd36ms9YPYV66enpQQEcGfoow66O2KkR8k_863t.jpg?r=283',
          isActive: false
        }
      ],
      itemsDois: [
        {
          title: 'Filme 13',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUDxyc84SmJ6OjEnlQc49VMrrBcxnNZozzIvSMkMcs5GJNrYMxegnMA10ePMfycBbv5jVXQ3Jqm-hN0SZsVMa_a9Tx0CTitiYTsjhm2A6K2SKaDZHKLdZzUJda4oIjsPgRyMTpRmf74JIkA55KR9I4-Ok9RNQW_c3OFsTNLowT4nTrp23AkUD6qY4aws_tY.jpg?r=4b8',
          isActive: false
        },
        {
          title: 'Filme 14',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTAg1Jll723CyaAWOLzTEVb725ErL7gR3UCzF7k9TsoacKEbit2AjKx6-LI2yM-7_ZFOVL-x5rmFTbfMWh3kLc8ydA_5WfZuFvmaSO10gSu03ADrtCL2BHEuA7_T60RVcHtBymFg9dgu2hJk2KAcBwTFwW1h1jc_XAfZpKVfb5QqwTFrUKl_83j36HQNlJk.jpg?r=9ab',
          isActive: false
        },
        {
          title: 'Filme 15',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdzKzolNi2DoyGj3IzjijWawZscwgFfM1MBK6Fb2yGW6loBqHCS8D8GolOzl03VfraxHpwhhnyV8WwBpMVyuGfExDHaj4KjS2d6ZD1woigjxxvTCVbGF2elkZ0GTilX9Ny69.jpg?r=3b6',
          isActive: false
        },
        {
          title: 'Filme 16',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWUOCF9KZkMLTvJjKDXchw2t_fOdSSzLNN9isoaVT6iHbtL_RNljK64wCr5nNzl1EU5m35zH-CgaDWHeI-VM531YLYdaxmkkE6gqdS_TemZPQYmGQNXLLtkWQy_us9eWhj0EREAB-A73dDMEL_OvUJijemg6dT_qbC-09cpA0flM7hcv5bAkbkHPGDtG70g.jpg?r=a27',
          isActive: false
        },
        {
          title: 'Filme 17',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABa8hXQ5QbzpMiBTV4zL0iIw39XZVNaZebNTYyYA0cnFeIZH9fzTwfOb1wvS8F1_Yszz0NHEJl0T7AIv9uxolPTRn6HJCvPDHSo-0JVRIoVCIGSNsLPDGBq_C9bT3_iyCFVcD60p4I9pXwszGuzgh93MH9wDFnN9rLTuA7EFZb8tSXXqaimVdRWrTK0b6duLy-D2K765N2L1lSQgJrXOOCwXaRZkB3XJbc1NYeHBvFgwPYAKS10SlCA7-_hTXVyZXZEOc7WopSs1QsrsJGtWJTybK05QEnCyh0p6hIBXbkMOT5HW1wqzOewLqgq_PVDUaqT45cLCgcOBoQ_4Ai3mR_qo.webp?r=615',
          isActive: false
        },
        {
          title: 'Filme 18',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVrKAo6PY8hm-Y_Xrw-v2QPd7UqET7-Kgqc6Ql3HjZdDBNO81LkR6cu_ur8aLY72n6Tl_u0N8yxiuGdTls8tUTTwvm9kq7MIoZE.webp?r=ced',
          isActive: false
        },
        {
          title: 'Filme 19',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRHacg_vOuBxv1TYiWOQ7rylV0mhRzhs15bI8BOfx0vuqovXrM8o5N9ycYPEEHMDCLxxY94HPxsuuvWA_EGrd1aAz9KrFbJ6vujJjEtkKYF2AJTFozs8GsU2nkHp2UlvT3JF09nz9WjXywApidr-QtMTxpa5Foob4MU.webp?r=b9c',
          isActive: false
        },
        {
          title: 'Filme 20',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS1l__N3JrgFdHmg40AWNJJme3v5PvMqQ4CKPfIAEKB4_jmHrn8ev-vWzouldI8KU5sZTHOwOlvE6C_MZJpiu7jAd3n7Ol42tAeDDmcYS8-FacPFbUDyv487o2I8QNYbbAJx.jpg?r=2c4',
          isActive: false
        },
        {
          title: 'Filme 21',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTm5PulkjOb4KnInLfSheY8Gkb4iPm7WTMrXHONDiUF-IYt6Zp2Ev1mkEDwnwAh_njzndMPnFPzz4uLH4WCHgB3n8i-KKHPib9DzHXzaNGHmifJ9TqPt2oAJthinzMq4R1qGRGk28V5SOUg6pjaSeTzR8Qna4Pbc6qY.webp?r=316',
          isActive: false
        },
        {
          title: 'Filme 22',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYM5sMrfGQ7NHOJpAQXQJFGScjwUEciYL6yLPXZvRvIO_3e4bjI0cwAyDtYadgcIXGVSEUkfZyd5irvcMHvRr-yeNtS3S4t2-bbtt3-J_8kfiXjYF3MzlA9F6jkEfupZ5eqG3t-sD_sk-f8chc8apiTD0eng4KcSoMbiaeFKZO2boYogs5BEkHMd4tQQt1Y.jpg?r=7d9',
          isActive: false
        },
        {
          title: 'Filme 23',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZSMRVpJ2rzNE-niYMZeq84wWHraUAkEgiwHmDa2x_P9od7Ca3yEcAAbv03EBd4fLeGHUYuw5VTUznmbiAMcgqdn1aqxtAQvUKkA0AOmVO--4fQcYH0vhmzDcOdj6bnKgjFU8ZXat3bcI5AXG7bEPsyWWVuMgXjQ6lY.webp?r=8e8',
          isActive: false
        },
        {
          title: 'Filme 24',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcBwm-YTYnthECXxtGiLO4gMJA9GDW5F7445LFcdRemPtMLRzMfAv_DFOXaEOdbrp-nQC8BOwEr4SgGPorVAagSOyDk5tZn7skpPAq-iKxZ7jAip_O5UVFYv-Uv02AcJCisk.jpg?r=d1d',
          isActive: false
        },
        {
          title: 'Filme 25',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABekT9V2ztrymgn9ssl6XrJcaR7CUrl-xPyqWn6IWAjBxQ6v47Zh0qxvDALFAivB5E8gw6PT4OgHt2wJDKkA9Y4M196eVeSaiUT6hmrIk-Tap5GNJBHEcH_xuYfjX67nq-ib2jPk0e-lxCdVijzKWGW10UMSOG4REgkaiC6xtb-xtX-424YD2KhvmbfGH3LgEylJfzcHiQa6MFKulErg4_36TvwkwdYeavFZIf7_qEqJ0fvOeUpyFtzu-yY3ILlVrV2YTzzHZpvMSehtW3fUAAG8OcGpcftVyUC1LRzwNZH0ZZBryYRyr5kBOjyVa_rclexjmUrX3C8j5-Zr5VIcm-_xJNn7Dic2dcskLXybaKn3RtGEmZMlD3y9iYBDOj9GfejRx-DH1VHOZmL7mj07EF7ogua3EfnSBnynKPQjIlO0FudQkUmDu-kIBRqBT-Nj3Xpx0_ktGvQyuuTc.jpg?r=14d',
          isActive: false
        }
      ],
      itemsTres: [
        {
          title: 'Filme 1',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZLhJbv3Xm860mGDXRvAWh55aG37qBtmvoklZWWAkZnvU2ySXdqzxTDhfweL5ctCtzxo-POu8wP5fJ4UXQFFPg_95UAYHtKCo-SqhRlg8ulZQ5YaftxAw_81uWUTW7U_cRqyhueuU1PGONSlY4-RA2mKjDezbbM1LBpl1BdsyPbQEMRqLGT9F2BTvRxmIQ-xATMY9yyw28d99yobpJBPHzCTZ8n2ett9qYSxKf3weUNH53M0coicuKEvc9_Nh1PnZTQHOx5R3s0su-xQF-rVpJr7OU9a4dzQDE9E7sCXI7UaL6DextRQ2Cma9MveBVyKV_RzdZlq7_2h01MY8awTGOITrnpCtVxYC2G1Cc7mXCRZI2qj77U.jpg?r=6f9',
          isActive: false
        },
        {
          title: 'Filme 2',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaobMsdL6ejvTg8B69xj5nl9-JBp_VwbGZI2sFTe7UL5Mka2Hq1drM6wJ8YbpsrcZrchclDJNCZ-yon3WN6-G1sTQ-RpzDx-D0g.webp?r=422',
          isActive: false
        },
        {
          title: 'Filme 3',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWfd_wVcG1RCNLvADPocoeNA4mOyZniNN4dpnqRyFqN_QYT5JxIFBZb3AlDVuJJVWbF8FKVZTxTzop3Ni-PohyWTKQ_5T9onM6wiEIjyjUJUBF0GlaejyS4T_kI1ISckM9L1.jpg?r=5a4',
          isActive: false
        },
        {
          title: 'Filme 4',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABePagAWDoKes6YLxCcSSM0R6vt8dfhV3nffNPQRAW_jYzcSIqtnQd_cM18DW2SyM75e93yqE9MQNuIsEB-4WTRFbQkPFgtZvC1bBCP3Fgbb6Est1iH9flsD-gPq-N8WVYyGt.jpg?r=34d',
          isActive: false
        },
        {
          title: 'Filme 5',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABblT6s8BUXwRhIjbqvRESyanX07GPOUE-bl5_56vNIglPG2V-uJYaQCibUe01AEY8ts-uzpd8bMDz2oyrvtKprSdr0oLY9ZcYBs.webp?r=49b',
          isActive: false
        },
        {
          title: 'Filme 6',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZzL8uuT1VlwqhGT8_RFDtrYSyqPsA7owHDLMcJTOYU_RfQLG5wbyG4gjcAM7Rkvp0Mazr_nmy2E99PoCAb8rRchNQNtL_lcbd-ayZR0eIlskFJZEDmAs_-okC-RFXH4NzPO.jpg?r=1fc',
          isActive: false
        },
        {
          title: 'Filme 7',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaCwUvdmr9GKgMlgbxP55w3BusPzBI36fx3YoMZ-n1YLXxJfsIy00hYSaRDLukmaZkrdUk6HVBh95Q5l1mxdRFroRuLTQ50azIs.webp?r=a22',
          isActive: false
        },
        {
          title: 'Filme 8',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRIuLz341A7wnjm42XbOPThiyKKWL2nln6FILcJuvwIuDoDM9O7oxi8DXV5S_2C_-kMHoG0fzZ8H0RGXKCnGI32elV9k8dJK9r94Ebkx0x3jsXcCVuSIWSanqOmWYKum1Aqm.jpg?r=cb6',
          isActive: false
        },
        {
          title: 'Filme 9',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABViRdVfryoqQIfgtu2_AfjhWweZcQXc2CGYIucUq6_UyH7gs22Y4Voe_oaZo6_dbgIH8y8vFhyqd1fGa7C8tGP0pycpcK5qem1sY2dP-jPCvisD6b6aC7VslGEqL_G_2toYu.jpg?r=c90',
          isActive: false
        },
        {
          title: 'Filme 10',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRkRSJrXwvHbU2fDYKJfR7lwSl623-656ws8A9Bs170WQNeQqz4pBvBsyMt-TY9O_mvkH4jA4FZaAmhd3oUFq0AhXSu_cZLGQYMXU5VpANfCP8IPmly6eeO6RMhepevIG1Zr.jpg?r=019',
          isActive: false
        },
        {
          title: 'Filme 11',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaKXrcLh57Clj2ery1iCf8Tu_xXZs_ULDduzaC1uXDDy_0Xkp1XZ8jt2xyIKOTh1-gFZqASQmPVTGhNPYPqJlgbNjqM8MLXFmshD_9D1Gyefgs1NYwDsQeFvGEJ-L9gLDOjS.jpg?r=2d4',
          isActive: false
        },
        {
          title: 'Filme 12',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZyVdru72h9ZlXBDo5gTNBgsIeEr-dPs5ZSjXue14XeNmqDPoi6L5zARKBqqktmGerQaU8QanDdNaegCCgViRAdkDf2Ng0MZZkkHTOpVa4ThF0blIEb00NxVVvG99Dy161-e.jpg?r=3ab',
          isActive: false
        }
      ],
      itemsQuatro: [
        {
          title: 'Filme 1',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYG24J44t6AaQ48kW8CiqH2nK6fJq_Irr9c1kPHZLwv6EGCiXu9qvlvLocwVm2Do-IpYbws8B9v96_geaPpNuG-6jkA_goi1GpeyTudVKAGm2ooO2BRV4isuneS0a0WS0ONv.jpg?r=bab',
          isActive: false
        },
        {
          title: 'Filme 2',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABe9BgpK_kSp-xnN0W49mHBaKgEACCK4JtJrSywpgh3eMH_d7hsWMOf4ejmbKQ-xUi4QdijxNjG9COGllZYgWBwILSEkOea7c1Gq9pDgKouDSV2vExdjQiizruw5uLy4Mnlm0.jpg?r=69f',
          isActive: false
        },
        {
          title: 'Filme 3',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWJ3H2jFQ_GvBsdYXHzg6LcK1kEK1cdBIH3Stf6OgQUIrOf0jy4JUNuWdhDvsopmGbOZtPHowOpVF1kJGPtUl-8wXWntIBKzhMEgTQZxVjelBLUWEGrVIOmK-0UIIoKBlr2q.jpg?r=299',
          isActive: false
        },
        {
          title: 'Filme 4',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZRZIg6BnarsEpc7NUPhUfdL0Kq5D-xnpaxgLZ7yQoCkZPq7vGqbaC9rLGkywZHORC10vU0V2L14Wq-Bt2Lrut8SWFA237Wujwu51XusH-CFWuBjnBuO6NPyDBZkZNSQVnoG.jpg?r=710',
          isActive: false
        },
        {
          title: 'Filme 5',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfSYFPbNWM7Id0p33qdsCQYPnqEyqyzU1uPNgbWGfNlAebmPh_lD46moEY575fM_acIsA2ygqbap9NNkmWp0dokhE-WHzwYHsjwka4KqFbICRxXVwdqzFJNhmMwdzRSUc4R_.jpg?r=799',
          isActive: false
        },
        {
          title: 'Filme 6',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQG7zwmg-DmoD5dKt3OGz2nVsOshPkm-8AQPn5k3vJWYH_a7plHYxWyzPuOt8G8LIBmA45HSx0R5TS3ZHQKX2BlvqAhR0pWkmxV3-wc2GtpL-mNDZQ9P8l4FBsQlwT4bwzzK.jpg?r=3a6',
          isActive: false
        },
        {
          title: 'Filme 7',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABc9JkyIXQZTlQ4uZWlJoylDsD2pvJ8kn3nHlcCOhW1EDmERpSnsIImm620VIcb5b7MeCr254fTdp0awmxDsK-XiftZmoKtuPfIyJkl1hE-fw_HEg4f6vJn45z7MGQZWmBofA.jpg?r=6f4',
          isActive: false
        },
        {
          title: 'Filme 8',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfQZkk0BOVaSaIEJvl46nzPSwu1CQHYSwhW8kLAk4e-mni1mZK00dWo44DhVNbqul4UaF5uBe2a0RufDH1j0pDoxStb8eDBS5hao4wkl9vZDuqvIzaZX4gfAdMzTVWE4DIww.jpg?r=6f2',
          isActive: false
        },
        {
          title: 'Filme 9',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeY3VeUwaXQ_2J-6ajWrCAKXKUh126Cq5CVh4pAm2Jez4yhxlbPa5GdNsLww8V01JlXVwWGcQ_33tz0D92DIeRGv5Ihc7AWDwusZsFXZYlXQQPeOEGry0SwcZF91EdJFV-_7.jpg?r=364',
          isActive: false
        },
        {
          title: 'Filme 10',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeW9sL_OW9co5zChh_Qi4jGR0R0K9S7Y_Y9nJmyezv2LuLZzDhtit5C3M-vXFSIvve0yde1AiVkAs7qFGcGQjgoHErxRXWVFpagYp7aSDVDmIT8aOiVsvSFpWYm3gLWeayFS.jpg?r=b2d',
          isActive: false
        },
        {
          title: 'Filme 11',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW4cesbspEAhJB-oC0BXXqyfTbqoEkOW9l_Bizh2CqK-wjYoAt7sOWH8dXVit-WYpfL4mPXJMnjaN8S-CZ_-XlG69KU8Dm_wUV74ietu2gH5hEPs2rp_eNUSjnbrLtCL9MVp.jpg?r=57e',
          isActive: false
        },
        {
          title: 'Filme 12',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSt60hEmtd6U1jv-BqyAQjDMXlMJ-JW6wN9vDzLNwnygVQF2eRfRdO8go6SZ1dmll1ef3PUbXfb6a_SpTsWtl5Ak3Dv1zQy2mRJhLklFiVoybEKmQ2x2KhqQzDwLMf9196lY.jpg?r=dab',
          isActive: false
        }
      ],
      itemsCinco: [
        {
          title: 'Filme 1',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQOQdHb1z1amHfzBqcqHovwDPP5yd-BPv0OAlYPsYRR3_W-9570JDiUJ2u2VYTjxPLFEkqZZaaZ4U1AzZb2m6SyjQNjNhuR2ctStvCIcxtWkSPnsGpG-biBFP5ME9AKFmz1f.jpg?r=2ee',
          isActive: false
        },
        {
          title: 'Filme 2',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSPBTTvSQTgUxcK3gQHISlGkb15Vee5xsZNc1dvlCbZqw4pzuVtErW-Ot-BpEkxz1k0tqW2UOynJ01XXmC9NTjibIdhj3HTMRVIXp2AYRSKnu-n0KNhqWdzxFJiMEUNItAQw.jpg?r=cfc',
          isActive: false
        },
        {
          title: 'Filme 3',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQo2GIROX3jMTFFnRJWZBFxvs45-5z1sK8kai8zwP55lIDt6HA59-pND0lFqo3JRl68OCAiLv0SSxvnb0Hs58_Quuy3E--hjeO4tqXFy8jXg0Nk9ZIKREEzmgL6rKYH_ySUG.jpg?r=a0d',
          isActive: false
        },
        {
          title: 'Filme 4',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABceFw70tYGyh6ymgzjKt0k4Wixu_1BnKgQs_QkR54q1tSNU63f8ck7n-PjHAkR3JRDqqWgItHJBysEo6ElzAdfgXMr_ngZJ_u9CQ3k_8m0Emk7yXqPgzTt612Pk7pz_AdRrp.jpg?r=970',
          isActive: false
        },
        {
          title: 'Filme 5',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTw-IchmBhH_bCXVZIQYwI19nnd0NQBDxJFQmTokzIUwS6d52SgxrRHD-nT92qjDvCzRxinykvfNeV_oJ4ttAo4rB5df1SAG65L3jhCbMn0lt4iFD7gZ-T-Hncx159z0Lu9y.jpg?r=48d',
          isActive: false
        },
        {
          title: 'Filme 6',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABc1BF_I30cgLlYCZjBww2yPpuNDQq_Mk6X6ZWq8hqfoVJCeMeadk4HSstiXrtYuowZioXxr4tF-UJVVOEFCvNibMgrG5CqHJAb4T_E4UAkuXNsKXR_wQrzhiQWv0a_UqO0oR.jpg?r=0d9',
          isActive: false
        },
        {
          title: 'Filme 7',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ4FQimqxMmXEFJCd1KMCvEzz2T_OFxJv3risteSV2rJ-4hAdFx1FiS3o0OPvAXHQ1t3wpkg2pq9j661VFOm5DRrSdFMXWKfd88.webp?r=25d',
          isActive: false
        },
        {
          title: 'Filme 7',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfIInOkQa5upa3v8dacoke24a5S80Ql_ly6mCUkyA39ymj6k3jaSQ2Lihx9l7-8CzzP428oX8cACM8_sY2AK2x0Cmn6y5wczNQy_q8xOOmvnsNgzkZ-BAas-7SdrP6rHtwd4.jpg?r=21a',
          isActive: false
        },
        {
          title: 'Filme 8',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABe9BgpK_kSp-xnN0W49mHBaKgEACCK4JtJrSywpgh3eMH_d7hsWMOf4ejmbKQ-xUi4QdijxNjG9COGllZYgWBwILSEkOea7c1Gq9pDgKouDSV2vExdjQiizruw5uLy4Mnlm0.jpg?r=69f',
          isActive: false
        },
        {
          title: 'Filme 9',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXgkuUJ2i4Uw4EwbaxP0OBnyx8kpDaulylqzEr7FA2aKrHy_2JsewKC0iJya-xI5JKS-k8cGw54Qh7vkzCdhdAX-MrLba0UBCtI_CEv3e-dEDqtXYNg5qM43TZFVbOaGCe3P.jpg?r=9c1',
          isActive: false
        },
        {
          title: 'Filme 10',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABc6Z2JqfUaOJ9UNXXMADBiLLaHWtB5wArrG9aMAxfgr9Qeou_lzhD5YCeI46IqiaRmqV7VhtnwZ4O8LCZTW9VOWDgjFFR0wYrEEofyUgo86TrQycZdtkCMtznmqUgc9echwQ.jpg?r=817',
          isActive: false
        },
        {
          title: 'Filme 11',
          image: 'https://occ-0-5446-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW4cesbspEAhJB-oC0BXXqyfTbqoEkOW9l_Bizh2CqK-wjYoAt7sOWH8dXVit-WYpfL4mPXJMnjaN8S-CZ_-XlG69KU8Dm_wUV74ietu2gH5hEPs2rp_eNUSjnbrLtCL9MVp.jpg?r=57e',
          isActive: false
        }
      ],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram'
      ]
    }
  }
}
</script>

<style>
.imgFundoPrincipal {
  background:
  linear-gradient(212.38deg, rgba(0, 0, 0, 0) 0.53%, #000000 71.04%),
  linear-gradient(269.78deg, #000000 -1.71%, rgba(0, 0, 0, 0) -1.7%,rgba(0, 0, 0, 0.85) 99.81%),
  url("../../assets/imagemPrincipal.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
}
</style>
