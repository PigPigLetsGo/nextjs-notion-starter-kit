import { useEffect } from 'react';

const UtterancesComments = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.setAttribute('repo', 'PigPigLetsGo/Commentarea');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', 'comment');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');

    const comments = document.getElementById('comments');
    if (comments) comments.appendChild(script);

    return () => {
      if (comments) comments.innerHTML = '';
    };
  }, []);

  return <div id="comments" />;
};

export default UtterancesComments;
