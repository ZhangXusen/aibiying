import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { ScrollViewStyle } from "./style";

const ScrollView = memo((props) => {
	const [showRight, setShowRight] = useState(false);
	const [showLeft, setShowLeft] = useState(false);
	const [PositionIndex, setPositionIndex] = useState(0); //
	const totalDistanceRef = useRef(); //使totalDistance在组件重新渲染时不发生改变

	const ScrollContentRef = useRef();
	useEffect(() => {
		//当还可以向右滚动时，显示向右按钮
		const scrollWidth = ScrollContentRef.current.scrollWidth; //可滚动的宽度
		const clientWidth = ScrollContentRef.current.clientWidth; //本身占据的宽度
		const totalDistance = scrollWidth - clientWidth; //可滚动的距离
		setShowRight(totalDistance > 0);

		totalDistanceRef.current = totalDistance;
	}, [props.children]);

	// function rightBtnClick() {
	// 	const newPositionIndex = PositionIndex + 1;
	// 	const newEleRef = ScrollContentRef.current.children[newPositionIndex];
	// 	const offsetLeft = newEleRef.offsetLeft; //相对于父元素的偏移量 注：父元素要加position:relative;
	// 	ScrollContentRef.current.style.transform = `translate(-${offsetLeft}px)`;
	// 	setPositionIndex(newPositionIndex);
	// 	//是否继续显示右侧按钮
	// 	setShowRight(totalDistanceRef.current > offsetLeft); //当前已经移动的距离小于可移动的距离时显示

	// 	//显示左侧
	// 	setShowLeft(offsetLeft > 0);
	// }

	// function leftBtnClick() {
	// 	const newPositionIndex = PositionIndex - 1;
	// 	const newEleRef = ScrollContentRef.current.children[newPositionIndex];
	// 	const offsetLeft = newEleRef.offsetLeft; //相对于父元素的偏移量 注：父元素要加position:relative;
	// 	ScrollContentRef.current.style.transform = `translate(${offsetLeft}px)`;
	// 	setPositionIndex(newPositionIndex);
	// 	//是否继续显示右侧按钮
	// 	setShowRight(totalDistanceRef.current > offsetLeft); //当前已经移动的距离小于可移动的距离时显示
	// 	setShowLeft(offsetLeft > 0);
	// }

	function ControlBtnClick(isRight) {
		const newPositionIndex = isRight ? PositionIndex + 1 : PositionIndex - 1;
		const newEleRef = ScrollContentRef.current.children[newPositionIndex];
		const offsetLeft = newEleRef.offsetLeft; //相对于父元素的偏移量 注：父元素要加position:relative;
		ScrollContentRef.current.style.transform = `translate(-${offsetLeft}px)`;
		setPositionIndex(newPositionIndex);
		//是否继续显示右侧按钮
		setShowRight(totalDistanceRef.current > offsetLeft); //当前已经移动的距离小于可移动的距离时显示
		setShowLeft(offsetLeft > 0);
	}
	return (
		<ScrollViewStyle>
			{showLeft && (
				<div
					className="btn-left control"
					onClick={(e) => ControlBtnClick(false)}
				>
					<IconArrowLeft />
				</div>
			)}
			{showRight && (
				<div
					className="btn-right control"
					onClick={(e) => ControlBtnClick(true)}
				>
					<IconArrowRight />
				</div>
			)}
			<div className="scroll">
				<div className="scroll-content" ref={ScrollContentRef}>
					{props.children}
				</div>
			</div>
		</ScrollViewStyle>
	);
});

ScrollView.propTypes = {};

export default ScrollView;
