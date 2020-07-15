export default {
    locale: 'fi',
    country: 'FI',
    loginForm: {
        byAccountBtn: 'Tilin salasanan kirjautuminen',
        byPhoneBtn: 'Puhelinnumeron kirjautuminen',
        accountPlaceholder: 'kirjoita tili',
        passwordPlaceholder: 'Anna salasana',
        autoLogin: 'automaattinen sisäänkirjautuminen',
        forgetBtn: 'unohtaa salasana',
        loginBtn: 'Kirjaudu sisään',
        byAccountTip: {
            emptyErr: 'Tili ei voi olla tyhjä'
        },
        byPasswordTip: {
            emptyErr: 'salasana ei voi olla tyhjä'
        },
        byValidTip: {
            emptyErr: 'vahvistuskoodi on täytettävä'
        },
        sendMsg: {
            repeatErr: 'Älä lähetä toistuvasti',
            success: 'Hanki menestys',
            codeTip: 'Vahvistuskoodisi on'
        },
        phonePlaceholder: 'Anna puhelinnumero',
        validPlaceholder: 'Captcha',
        validBtn: 'hanki vahvistuskoodi',
        loginSuccess: 'kirjautuminen onnistui'
    },
    menuObj: {
        basicFeature: 'Peruskyky',
        cpUse: 'Komponenttien käyttö',
        childMenu: {
            0: 'Peruskehys',
            1: 'Peruskyky',
            '0-0': 'vue',
            '0-1': 'Muurahaissuunnittelu',
            '1-0': 'Kehystoiminto',
            '1-0-0': 'Projektin kokoonpano',
            '1-0-1': 'Etuosan loki',
            '1-0-2': 'Paikallinen pilkka',
            '1-0-3': 'globalisaatio',
            '1-0-4': 'Tietojen sanakirja',
            '1-0-5': 'EventBus',
            '1-0-6': 'työkalusarja',
            '1-0-7': 'Kulunvalvonta',
            '1-0-8': 'pikanäppäin',
            '1-1': 'Sivutoiminto',
            '1-1-0': 'Komponenttisivu',
            '1-1-1': 'URL-sivu',
            '1-1-2': 'Ei lupa-sivua',
            '1-1-3': '404 sivua'
        },
        defaultMenu: {
            home: 'Koti'
        },
        errorTip: {
            notfoundTip: 'Tätä polkua ei löytynyt',
            emptyErr: 'Komponenttipolkua ei ole määritetty'
        }
    },
    sysInfo: {
        sysIntro: 'Helppo käyttää käyttöliittymäkehitystä, joka perustuu Vue- ja Ant-suunnitteluun'
    },
    requestInfo: {
        withoutUrl: 'Pyyntöosoite ei voi olla tyhjä',
        networkErr: 'Verkkopyyntö epäonnistui, yritä myöhemmin uudelleen'
    },
    localeMap: {
        ar: 'arabialainen',
        bg: 'bulgarialainen',
        ca: 'katalaani',
        cs: 'czech',
        da: 'Tanskan kieli',
        de: 'Saksan kieli',
        el: 'kreikkalainen',
        'en-gb': 'Englanti',
        en: 'Englanti',
        es: 'Espanja',
        et: 'Virolainen',
        fa: 'persialainen',
        fi: 'Suomalainen',
        fr: 'Ranskan kieli',
        he: 'heprealainen',
        hi: 'hindi',
        hr: 'kroaatti',
        hu: 'Unkarin kieli',
        hy: 'armenian',
        id: 'indonesialainen',
        is: 'islantilainen',
        it: 'italialainen ',
        ja: 'japanilainen',
        kn: 'kannada',
        ko: 'Korealainen',
        'ku-iq': 'Keski-kurdi',
        lv: 'Keski-kurdi',
        mk: 'Makedonia',
        'mn-mn': 'mongolialainen',
        'ms-my': 'Malaiji',
        nb: 'Norjan kieli',
        'ne-np': 'nepali',
        'nl-be': 'flaamilainen',
        nl: 'Hollannin kieli',
        pl: 'Kiillottaa',
        'pt-br': 'Brasilian portugali',
        pt: 'Euroopan portugali',
        ro: 'romanialainen',
        ru: 'Venäjän kieli',
        sk: 'Slovakian',
        sl: 'slovenian',
        sr: 'serbialainen',
        sv: 'Ruotsin kieli',
        ta: 'tamil',
        th: 'thaimaalainen',
        tr: 'turkki',
        uk: 'ukrainalainen',
        vi: 'vietnam',
        'zh-cn': 'Yksinkertaistettu kiina',
        'zh-tw': 'perinteinen kiina'
    },
    tagObj: {
        closeAll: 'Sulje kaikki välilehdet',
        closeCur: 'Sulje nykyinen välilehti',
        closeOther: 'Sulje muut tunnisteet',
        closeRight: 'Sulje oikea tarra',
        singlePage: 'Itsenäinen sivu',
        refreshPage: 'Päivitä sivu',
        affixPage: 'Kiinteä sivu',
        cancelAffixPage: 'Irrota',
        errorTip: {
            homePageCloseError: 'Kotisivua ei saa sulkea',
            affixPageCloseError: 'Kiinteää sivua ei saa sulkea',
            homePageAffixError: 'Kotisivua ei voi irrottaa'
        },
        checkSave: 'Haluatko sulkea sivun?(Varmista, että punaisen tarran sivun sisältö on tallennettu)',
        cancelClose: 'Lopetettu toiminta peruutettu'
    },
    personalCenter: {
        frontendLog: 'Etuosan loki',
        customSetting: 'Henkilökohtaiset asetukset',
        logout: 'Kirjaudu ulos'
    },
    errorPage: {
        errorTip: {
            notfoundTip: 'Valitettavasti käymääsi sivua ei ole',
            notrightTip: 'Valitettavasti sinulla ei ole lupaa päästä tälle sivulle',
            noserviceTip: 'Jokin meni pieleen palvelimen kanssa, yritä myöhemmin uudelleen'
        },
        btnText: 'Sulje sivu'
    },
    searchPanel: {
        btn: {
            search: 'Tiedustella',
            shrink: 'Romahdus',
            reset: 'Nollaa',
            unshrink: 'Unfold'
        }
    },
    logline: {
        list: 'Lokiluettelo',
        detail: 'Lokitiedot',
        btnList: {
            export: 'Viedä',
            remove: 'Tyhjä'
        },
        time: {
            plh: 'Ole hyvä ja valitse aikataulu',
            range: 'määräaika',
            halfDay: 'Puolen päivän sisällä',
            oneDay: 'yhdessä päivässä',
            weekDay: 'viikon sisällä',
            monthDay: 'Kuukauden sisällä'
        },
        type: {
            logType: 'Lokityyppi',
            plh: 'Valitse lokityyppi'
        },
        tableColumns: {
            index: 'Sarjanumero',
            desc: 'Lokin kuvaus',
            type: 'Lokityyppi',
            time: 'aika',
            op: 'käyttö-'
        },
        request: 'Pyydä tietoja',
        error: {
            cancel: 'Tyhjä toiminta peruutettu',
            confirm: 'Haluatko tyhjentää lokin?(Loki tyhjennetään eikä sitä voida noutaa)'
        },
        success: 'Loki on tyhjennetty'
    },
    comTable: {
        columns: {
            title: 'Sarakeasetukset',
            all: 'Valitse kaikki',
            reset: 'Nollaa',
            fixedLeft: 'Kiinteä vasemmalle',
            fixedRight: 'Kiinteä oikea',
            cancelFixed: 'Irrota'
        },
        size: {
            title: 'Rivin korkeus',
            small: 'kapea',
            normal: 'sisään',
            large: 'leveys'
        },
        fullscreen: 'koko näyttö',
        unFullscreen: 'Peruuta koko näyttö'
    },
    normalBtn: {
        detail: 'näkymä'
    }
}
