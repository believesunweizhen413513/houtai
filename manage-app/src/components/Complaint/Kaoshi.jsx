import React from 'react'
export default class Kaoshi extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            news: [],
        }
    }
    componentDidMount() {
        // console.log(11111)
        let news = JSON.parse(window.sessionStorage.getItem('news'))
        this.setState({
            news: news[0]
        }, () => {
            console.log(this.state);
        })

    }

    render() {
        return (
            <>
     <h3 className="_title">考试列表</h3>
   <div className="my-scores">
       <div className="my-score">
      <div className="my-item" >
       <div className="my-score_center"> 
        <h2>{this.state.news.title}</h2> 
           <p>考试时间：90分钟</p> 
           <p>总分数：100分</p> 
           <p title="HTML5（考试大纲）-->第1周-->HTML第一周新<br/>
                HTML5（考试大纲）-->第2周-->HTML第二周新<br/>
                HTML5（考试大纲）-->第3周-->HTML第三周新<br/>
                HTML5（考试大纲）-->第4周-->HTML第四周新" 
                style={{height:'40px',width: '402px'}}>考试范围：<span className="over_text">HTML5（考试大纲）--&gt;第1周--&gt;HTML第一周新;
                       HTML5（考试大纲）--&gt;第2周--&gt;HTML第二周新;<br/>
                       HTML5（考试大纲）--&gt;第3周--&gt;HTML第三周新;<br/>
                       HTML5（考试大纲）--&gt;第4周--&gt;HTML第四周新;<br/><br/>
                    </span>
            </p>
            <p style={{marginTop:'70px'}}>考试时间：2019-08-09</p>
           <div className="defen" style={{cursor:'pointer'}}>考试得分<br/>{this.state.news.chenji}</div> 
           </div>
         </div>
   </div>
       <div className="my-score">
      <div className="my-item" >
          <div className="my-score_center"> 
                                      <p>考试时间：90分钟</p> 
              <p>总分数：100分</p> 
              <p title="HTML5（考试大纲）-->第1周-->HTML第一周新<br/>
                   HTML5（考试大纲）-->第2周-->HTML第二周新<br/>
                   HTML5（考试大纲）-->第3周-->HTML第三周新<br/>
                   HTML5（考试大纲）-->第4周-->HTML第四周新" 
                   style={{height:'50px',width: '402px'}}>考试范围：<span className="over_text">HTML5（考试大纲）--&gt;第1周--&gt;HTML第一周新;
                          HTML5（考试大纲）--&gt;第2周--&gt;HTML第二周新;<br/>
                          HTML5（考试大纲）--&gt;第3周--&gt;HTML第三周新;<br/>
                          HTML5（考试大纲）--&gt;第4周--&gt;HTML第四周新;<br/><br/>
                       </span>
               </p>
               <p style={{marginTop:'70px'}}>考试时间：2019-08-09</p>
              <div className="defen" style={{cursor:'pointer'}}>考试得分<br/>88</div> 
              </div>
            </div>
      </div>
      </div>
            </>
        )
    }
}