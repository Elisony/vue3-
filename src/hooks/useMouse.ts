import {ref,onMounted,onBeforeUnmount } from 'vue'
export default function() {
  const x = ref(-1)
  const y = ref(-1)
  const clickHander=(event:MouseEvent)=>{
      x.value=event.pageX
      y.value=event.pageY
  }
  onMounted(() => {
      window.addEventListener('click',clickHander)
  })
  onBeforeUnmount(()=>{
      window.removeEventListener('click',clickHander)
  })
  return{
      x,
      y
  }
}
