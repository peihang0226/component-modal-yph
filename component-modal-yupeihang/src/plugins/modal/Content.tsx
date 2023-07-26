 // 维护 Modal 的内容，用于 h 函数和 jsx 语法
import { h } from 'vue'
const Content = (props: { render: (h: any) => void }) => props.render(h)
Content.props = ['render']
export default Content
