import React, {Component} from 'react';
import {Chip, Avatar} from 'material-ui';
import {
  ActionDateRange,
  ActionEvent,
  SocialPerson,
  MapsMyLocation,
} from 'material-ui/svg-icons';

import userData from '../testdata';

export default class Course extends Component {
  static title = '授業情報';

  componentWillMount() {
    this.setState(userData);
  }

  render() {
    let course = this.state.courses.filter(c => {
      return c.id == this.props.params.id;
    }).shift();
    return (
      <div>
        <CourseOverview data={this.state} course={course} />
      </div>
    );
  }
}

class CourseOverview extends Component {
  labelStyle = {
    display: 'block',
    color: '#999',
  };

  chipContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  componentWillMount() {
    this.setState(this.props.data);
  }

  render() {
    return (
      <div>
        <h2>
          {this.props.course.title}
          <small style={this.labelStyle}>
            {this.props.course.label}
          </small>
        </h2>
        <div style={this.chipContainerStyle}>
          {this.props.course.instructors.map((instructor, i) => {
            return <AvatarChip
              key={i}
              label={instructor.name}
              icon={instructor.image || <SocialPerson />}
            />;
          })}
          {this.props.course.schedules.map((schedule, i) => {
            let week = this.state.weeks[schedule.week];
            let period = this.state.periods[schedule.period];
            return <AvatarChip
              key={i}
              label={`${week} ${period}`}
              icon={<ActionEvent />}
            />;
          })}
          {this.props.course.schedules.map(schedule => {
            return schedule.location;
          }).filter((e, i, a) => a.indexOf(e) === i).map((location, i) => (
            <AvatarChip
              key={i}
              label={location}
              icon={<MapsMyLocation />}
            />
          ))}
        </div>
      </div>
    );
  }
}

class AvatarChip extends Component {
  style = {
    margin: 4,
  };

  render() {
    let props = {};
    if (typeof this.props.icon === 'string') {
      props.src = this.props.icon;
    } else {
      props.icon = this.props.icon;
    }
    return (
      <Chip onTouchTap={() => null} style={this.style}>
        <Avatar {...props} />
        {this.props.label}
      </Chip>
    );
  }
}
