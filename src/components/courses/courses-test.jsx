import React from 'react';
import ReactDOM from 'react-dom';

import {Courses} from './courses';

function getContainer() {
  return document.getElementById('container');
}

describe('courses component', () => {
  beforeEach(() => {
    let domContainerNode = document.createElement('div');
    domContainerNode.setAttribute('id', 'container');
    document.body.appendChild(domContainerNode);
  });

  afterEach(() => {
    let domContainerNode = getContainer();
    document.body.removeChild(domContainerNode);
  });

  it('should render without problems', () => {
    let domContainerNode = getContainer();
    let pageMain = ReactDOM.render(<Courses />, domContainerNode);
    let pageMainNode = ReactDOM.findDOMNode(pageMain);

    expect(pageMain).to.exist;
    expect(pageMainNode).to.have.class('courses');
  });
});
