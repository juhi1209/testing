import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component: VoteComponent;
  beforeEach(()=> {
     component = new VoteComponent();
  });

  it('should increment vote by 1', () => {   
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('should decrement vote by 1', () => {  
  component.downVote();

  expect(component.totalVotes).toBe(-1);
  });

});