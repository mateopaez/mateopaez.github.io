import React, { Component } from 'react'
import classNames from 'classnames';
import "../../styles/skillsMenu.css";
import skills from "./SkillsData";
import frontendIcon from "../../assets/portal_enter.png";
import backendIcon from "../../assets/portal_exit.png";

export default class SkillsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
    };
  };

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
      activeSubheading: 1,
    });
  };

  renderContent = (skills) => {
    return skills.map((skill, index) => (
      <div key={index} className={`skill-sub-container-${this.state.activeMenuItem}`}>
        <h3>{skill.title}</h3>
        <div className="level-container">
        {[...Array(6)].map((_, i) => (
          <div key={1} className={`level-point ${i < skill.level ? "filled" : "unfilled"}`} />
        ))}
        </div>
      </div>
    ));
  };

  render (){
    const {activeMenuItem} = this.state;
    const menuItems = ["FRONT-END", "BACK-END"];

    const currentIcon = activeMenuItem === 1 ? frontendIcon : backendIcon;

    return (
      <div className="skill-menu">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={classNames("skill-item", {activeSkill: activeMenuItem === index + 1})}
            onClick={() => this.handleMenuItemClick((index + 1))}
            >
            <h2 className="skill-title">{item}</h2>
          </div>
        ))}
        <img src={currentIcon} className="skill-icon" alt="current skill" />
        <div className="skill-sub-container">{this.renderContent(skills[activeMenuItem])}</div>
      </div>
    );
  };

}
