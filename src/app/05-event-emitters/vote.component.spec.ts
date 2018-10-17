import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise votechange event when total count is changed', () => {
    let totalVotes = null;
    component.voteChanged.subscribe( tv => totalVotes = tv);

    component.upVote();

    expect(totalVotes).toBe(1);

  });
});