import Seperator from '../assets/seperator.svg'
import Client1 from '../assets/Logo Client 1.svg'
import Client2 from '../assets/Logo Client 2.svg'
import Client3 from '../assets/Logo Client 3.svg'
import Client4 from '../assets/Logo Client 4.svg'
import About from '../assets/Replace This.svg'
import '../styles/HomePage.css';

export default function HomePage(){
    return <>
       <div className="hero-section">
        <div className="hero-top-container">
        <div className="get-started-section">
            <h1>Premium Printing Solutions</h1>
            <h3>Sociis varius nisl eu ipsum faucibus. Ac semper nisl turpis diam libero id ante nullam. Tellus.</h3>
            <button className="get-started-btn">Get started</button>
        </div>
        <div className="ratings-section">
            <div className="ratings">
             <div className="ratings-card"></div>
             <div className="bar-container"></div>
             </div>
             <div className="delivery">
             <div className="bar-container"></div>
             <div className="delivered-count">
                <h1>100+</h1>
                <h3>Items Delivered</h3>
             </div>
             </div>
        </div>
        </div>
        <div className="category-section">
           <h1 className="category-title">Category</h1>
           <div className="categories">
               <div className="category">
                <h1>BUSINESS CARD</h1>

                </div>
                <img src={Seperator}/>
                <div className="category">
                <h1>BUSINESS CARD</h1>

                </div>
                <img src={Seperator}/>
                <div className="category">
                <h1>BUSINESS CARD</h1>

                </div>
                <img src={Seperator}/>
                <div className="category">
                <h1>BUSINESS CARD</h1>

                </div>
                <img src={Seperator}/>
                <div className="category">
                <h1>BUSINESS CARD</h1>

                </div>
                <img src={Seperator}/>
                <div className="category">
                <h1>BUSINESS CARD</h1>

                </div>
                <img src={Seperator}/>
           </div>
        </div>
       </div>
       <div className="about-us-section">
          <div className="about-us">
            <div className="image">
              <img src={About}/>
           
            </div>
            <div className="about-content">
                <h3>About Us</h3>
                <h1>Crafting Excellence Through Every Print</h1>
                 <p>Odio at elit mauris neque nisl odio elementum viverra sollicitudin. Ante sed aliquam et duis eu mauris. Tristique quisque amet turpis sed interdum non sollicitudin vulputate mi.Odio at elit mauris neque nisl odio elementum viverra sollicitudin. Ante sed aliquam et duis eu mauris. Tristique quisque amet turpis sed interdum non sollicitudin vulputate mi.Odio at elit mauris neque nisl odio elementum viverra sollicitudin. Ante sed aliquam et duis eu mauris. Tristique quisque amet turpis sed interdum non sollicitudin vulputate mi.</p>
                <div className="divider"></div>
            
            </div>
          </div>
       
          <div className="partners-section">
          <h1>Our Partners :</h1>
          <div className="partners-logo">
               <img src={Client1}/>
               <img src={Client2}/>
               <img src={Client3}/>
               <img src={Client4}/>
             </div>
          
          </div>
       </div>
       <div className="company-stats-section">
         <div className="upper-stats-section">
             <div className="stats-title">
               <h3>Statistic</h3>
               <h1>Printz in Number</h1>
             </div>
             <div className="stats-content">
               <p>Odio at elit mauris neque nisl odio elementum viverra sollicitudin. Ante sed aliquam et duis eu mauris. Tristique quisque amet turpis sed interdum non sollicitudin vulputate mi. Interdum in et ut sed semper ornare fames.</p>
               <button className="learn-more-btn">
                 Learn More
               </button>
             </div>
         </div>
         <div className="lower-stats-section">
            <div className="stat">
               <h1>15+</h1>
               <h3>Years of Experience</h3>
            </div>

            <div className="stat">
               <h1>98%</h1>
               <h3>Satisfaction Rate</h3>
            </div>

            <div className="stat">
               <h1>50+</h1>
               <h3>Diverse Product</h3>
            </div>

            <div className="stat">
               <h1>10K</h1>
               <h3>Printing Capacity</h3>
            </div>
         </div>
       </div>
    </>
}