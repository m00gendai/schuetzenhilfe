export function getTargetPosition(e, element){
    const width = element.getBoundingClientRect().width
    const height =  element.getBoundingClientRect().height
    const sizeConstant = width/100

    const distToCenter = Math.floor(Math.sqrt((Math.pow((((e.nativeEvent.offsetX/sizeConstant)*2)-100),2)+Math.pow((((e.nativeEvent.offsetY/sizeConstant)*2)-100),2))))
	const hit = 100-distToCenter
    console.log(hit)
}