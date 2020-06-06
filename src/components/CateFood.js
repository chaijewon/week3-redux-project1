import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import axios from 'axios'
// 사용할 액션
import {FETCH_CATE_INFO,FETCH_CATE_FOOD} from "../actions/types";

export default function CateFood(props) {
    const dispatch=useDispatch();
    useEffect(()=>{
       axios.get('http://localhost:3355/cate_food',{
            params:{
                cno:props.match.params.cno
            }
        }).then((result)=>{
            dispatch({
                type:FETCH_CATE_FOOD,
                payload:result.data
            })
        })

        axios.get('http://localhost:3355/cate_info',{
            params:{
                cno:props.match.params.cno
            }
        }).then((result)=>{
            dispatch({
                type:FETCH_CATE_INFO,
                payload:result.data
            })
        })
    },[])
    // 데이터 전송 완료 ==> state 수정
    // 데이터 읽기
    const cate_food=useSelector((state)=>state.foods.cate_food);
    const cate_info=useSelector((state)=>state.foods.cate_info);

    return (
       <div className={"row"}>
           <h1 className={"text-center"}>{cate_info.title}</h1>
           <h3 className={"text-center"}>{cate_info.subject}</h3>
       </div>
    )
}
