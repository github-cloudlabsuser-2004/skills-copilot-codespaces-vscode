import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Home() {
  const [markdown, setMarkdown] = useState("type markdown here");

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <textarea
        value={markdown}
        onChange={handleChange}
        rows="10"
        cols="50"
        style={{ width: '100%', marginBottom: '20px' }}
      />
      <div style={{ width: '100%', border: '1px solid #ddd', padding: '20px' }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}






function reverseSentence(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

let inputSentence = "Hello world this is a test";
let outputSentence = reverseSentence(inputSentence);
console.log(outputSentence); // Output: "test a is this world Hello"

const data = [
  [{ name: 'John' }, { name: 'Jane' }],
  [{ name: 'Bob' }]
];

// Use flatMap to flatten the array and extract names
const names = data.flatMap(innerArray => innerArray.map(obj => obj.name));

console.log(names); // Output: ['John', 'Jane', 'Bob']
