import React from 'react';
import BotCard from './BotCard';

function BotArmy({bots, handleClick, handleDischarge}) {
 

  return (
    <div className="ui segment inverted black bill-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">
        {bots.map(bot => <BotCard key={bot.id} bot={bot} handleDischarge={handleDischarge} handleClick={handleClick} />)}
        </div>
      </div>
    </div>
  );
}

export default BotArmy;