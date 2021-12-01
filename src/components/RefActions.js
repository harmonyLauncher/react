import React from "react";
import SocialLinks from "./SocialLinks";
const SocialTypes=[{id:1,iconClassName:"fab fa-telegram-plane fa-2x",socialMediaType:"Follow on Telegram",numberOfFollowers:1},{id:2,iconClassName:"fab fa-twitter fa-2x",socialMediaType:"Follow on Twitter",numberOfFollowers:1},{id:3,iconClassName:"fas fa-retweet",socialMediaType:"Retweet",numberOfFollowers:2},{id:4,iconClassName:"fab fa-linkedin fa-2x",socialMediaType:"Follow on Linkedin",numberOfFollowers:1},{iconClassName:"fas fa-share-alt",socialMediaType:"Share link",numberOfFollowers:1}];
const RefActions = ({
    
}) => {
  return (
      <>
      <div class="container p-5 mb-5 vh-100">
        <div class="row g-0 text-white">
       <h1 class="fs-3">Referral Actions</h1>
            <h1 class="fs-2 text-center">Ways to Enter</h1>
    <ul class="list-group">
                
              {SocialTypes.map((item,index)=>{
                  return(
                      <SocialLinks key={item.id} iconClassName={item.iconClassName} socialMediaType={item.socialMediaType} numberOfFollowers={item.numberOfFollowers}/>
                  )
              })}  
            </ul>
            </div>
            </div>
            </>
  );
};

export default RefActions;