import React from 'react'
import { FadeInWrapper } from '../Components'
import { Button1 } from '../Components';
const Policy = () => {
  return (
        <FadeInWrapper>
        <div className="max-w-3xl mx-auto p-6  text-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-orange-500"><span className='rock-salt'>The Dev Den:</span> The Most Unnecessarily Strict Yet Totally Chill Policies</h1>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>No Bug, No Glory:</strong> If you find a bug, congratulations! You’re now our unofficial QA team. Report it, and we might even fix it... eventually. </li>
            <Button1 text="Report bug"  link="https://x.com/AniketYadav05_" className=" shadow-gray-700 w-30 text-sm self-center " />
            <li><strong>Code or Be Coded Out:</strong> If you're here to just lurk and not contribute anything useful, we totally understand. But just know, our imaginary judgmental bot is watching.</li>
            <li><strong>Debugging is a Lifestyle:</strong> If your code runs perfectly on the first try, we don’t trust you. Either you’re an AI, or you’ve made a deal with the dark side of programming.</li>
            <li><strong>Copy-Paste With Caution:</strong> Stack Overflow is your best friend, but if you copy-paste without understanding, we reserve the right to roast you mercilessly.</li>
            <li><strong>Dark Mode or Disownment:</strong> If you prefer light mode, please take a moment to reconsider your life choices. (Just kidding... or are we?)</li>
            <li><strong>Deploy, Then Panic:</strong> Ship your code with confidence. Then refresh the page 500 times to make sure nothing exploded.</li>
            <li><strong>“It Works on My Machine” is NOT a Bug Report:</strong> If your code only works in that one weird environment on your laptop, it doesn’t actually work. Sorry to break it to you.</li>
            <li><strong>Respect the Devs (Even the Ones Who Use Tabs):</strong> We don’t judge based on your choice of spaces vs. tabs... but just know, your editor will.</li>
            <li><strong>Coffee is Mandatory (Tea is Acceptable):</strong> If you’re coding without caffeine, are you even coding? Hydration is great and all, but let's be real—coffee runs this place.</li>
            <li><strong>Rule #10? Who Reads This Far Anyway?</strong> If you've made it this far, congratulations. You have the patience of a backend developer debugging a production issue. You belong here.</li>
          </ul>
          <p className="mt-6 text-center text-gray-400 ">Now go forth, write some messy Blogs, and pretend you have everything under control. Welcome to <strong className='rock-salt'>Dev Den</strong>! 🚀</p>
        </div>
        </FadeInWrapper>
      );
    };
 

export default Policy