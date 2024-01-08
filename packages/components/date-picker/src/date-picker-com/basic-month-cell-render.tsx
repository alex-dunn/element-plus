import { defineComponent, inject, renderSlot } from 'vue'
import dayjs from 'dayjs'
import { useLocale } from '@element-plus/hooks'
import { ROOT_PICKER_INJECTION_KEY } from '../constants'
import { basicCellProps } from '../props/basic-cell'

export default defineComponent({
  name: 'ElMonthDatePickerCell',
  props: basicCellProps,
  setup(props) {
    const { slots } = inject(ROOT_PICKER_INJECTION_KEY)!
    return () => {
      const { cell } = props

      const { t } = useLocale()

      const months = dayjs()
        .locale('en')
        .localeData()
        .monthsShort()
        .map((_) => _.toLowerCase())

      return renderSlot(slots, 'default', { ...cell }, () => [
        <div>
          <a class="cell">
            {t(`el.datepicker.months.${months[cell?.text || 0]}`)}
          </a>
        </div>,
      ])
    }
  },
})
