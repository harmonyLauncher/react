import React from "react";

const SocialLinks = ({iconClassName,socialMediaType,numberOfFollowers}) => {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-center">
                    <i class={iconClassName}></i> {socialMediaType}<a href="referral-leaderboard" class="badge bg-primary rounded-pill p-2">+{numberOfFollowers}</a>
                </li>
  );
};

export default SocialLinks;