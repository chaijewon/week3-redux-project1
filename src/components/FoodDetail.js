import React,{useEffect} from "react";
import {fetchFoodDetail} from "../actions/foodActions";
import {useDispatch,useSelector} from "react-redux";

export default function FoodDetail(props) {
    const dispatch = useDispatch();
    /*
        const initialState={
            category:[],
            cate_food:[],
            food_detail:{},
            cate_info:{}
        }
        store에 저장이 된다
        this.state={
           foods:{
              category:[],
              cate_food:[],
              food_detail:{},
              cate_info:{}
           }
        }
     */
    const {match}=props
    useEffect(()=>{
        dispatch(fetchFoodDetail(match.params.no))
        // function(dispatch)=> reducer연결
    },[])
    /*
          useSelector(function(state){

          });
     */
    const food_data=useSelector((state)=>state.foods.food_detail)
    const image2=String(food_data.image)
    const image=image2.split("^")
    /*
      https://mp-seoul-image-production-s3.mangoplate.com/1247474_1547185817525922.jpg?fit=around|512:512&crop=512:512;*,*^
     */
    const html=image.map((m)=>
       <td>
           <img src={m} width={"200"} height={"200"}/>
       </td>
    )
    return (
        <div className={"row"}>
          <table className={"table"}>
              <tr>
                  {html}
              </tr>
              <tr>
                  <td className={"text-center"} colSpan={"4"}>
                      {food_data.title}
                  </td>
              </tr>
              <tr>
                  <td width={"10%"}>주소</td>
                  <td colSpan={"3"}>{food_data.address}</td>
              </tr>
              <tr>
                  <td width={"10%"}>전화</td>
                  <td colSpan={"3"}>{food_data.tel}</td>
              </tr>
              <tr>
                  <td width={"10%"}>음식종류</td>
                  <td colSpan={"3"}>{food_data.type}</td>
              </tr>
              <tr>
                  <td width={"10%"}>가격대</td>
                  <td colSpan={"3"}>{food_data.price}</td>
              </tr>
          </table>
        </div>
    )
}