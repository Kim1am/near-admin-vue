// @ts-nocheck
import utils from './utils'
import { mapGetters } from 'vuex'
import Bus from '@corets/eventbus';
import HotKeyConfig from '@corets/type';

export default {
    data () {
        return {}
    },
    created () {
        // global log tool
        window.Logline = utils.loglineObj
    },
    computed: {
        ...mapGetters([
            'locale',
            'gloablLocale',
            'comConfig'
        ])
    },
    methods: {
        bindHotKeyEvent (): void {
            const self = this
            if (self.comConfig.buildSwitch.isHotKey) {
                window.onkeyup = (e: Event) => {
                    e.preventDefault()
                    Bus.$emit('windowKeyup', e)
                }
                self.initBusListener()
            }
        },
        triggerEvent (methodName, params, hotKey): void {
            const self = this
            if (self[methodName]) {
                self[methodName](params, hotKey)
            }
        },
        initBusListener (): void {
            const self = this
            Bus.$off('windowKeyup').$on('windowKeyup', (e: KeyboardEvent) => {
                const hotKey = utils.getHotKeyStringList(e)
                const hotKeyPathObj = HotKeyConfig[hotKey]
                if (hotKeyPathObj) {
                    const hotKeyWildcardList = hotKeyPathObj['*'] || []
                    const hotKeyEventList = hotKeyWildcardList.concat(hotKeyPathObj[self.pagePath] || [])
                    hotKeyEventList.forEach((item) => {
                        self.triggerEvent(item.method, item.params, hotKey)
                    })
                }
            })
        }
    },
    mounted () {
        const self = this
        self.bindHotKeyEvent()
    }
}