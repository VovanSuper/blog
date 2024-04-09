import type { FC } from 'react';

const Summary: FC = () => (
  <div className='user-info w-full'>
    <h2 className='mb-4 text-xl font-bold'>Summary:</h2>
    <ul className='list-disc text-sm font-light tracking-normal xl:font-semibold xl:tracking-wider'>
      <li>
        <p>Deep knowledge of core Computing and Software development methodologies.</p>
      </li>
      <li>
        <p>Knowledge of classical algorithms for computer science, data structures, design patterns;</p>
      </li>
      <li>
        <p>Web Platform, TCP/IP‚ networking‚ Cloud patterns and practices;</p>
      </li>
      <li>
        <p>Fundamental approaches in core engineering practice to produce software for new, innovative, and profitable solutions.</p>
      </li>
      <li>
        <p>Practicing Agile methodologies gathering user requirements, creating software designs and integration;</p>
      </li>
    </ul>
    <hr className='my-4 text-linkBlack20' />
  </div>
);
export default Summary;