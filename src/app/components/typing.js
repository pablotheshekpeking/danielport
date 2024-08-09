'use client'
import { useEffect } from 'react';
import { Text } from '@chakra-ui/react';

const TypewriterEffect = () => {
  useEffect(() => {
    const Text = document.querySelector('.typed');
    const items = Text.getAttribute('data-typed-items').split(',').map(item => item.trim());

    let currentItem = 0;
    let currentText = '';
    let isDeleting = false;

    function type() {
      const fullText = items[currentItem];
      currentText = isDeleting ? fullText.substring(0, currentText.length - 1) : fullText.substring(0, currentText.length + 1);
      Text.textContent = currentText;

      let typeSpeed = 50; // Adjust the typing speed as needed

      if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000; // Pause after typing the full text
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentItem = (currentItem + 1) % items.length;
      }

      setTimeout(type, typeSpeed);
    }

    type();
  }, []);

  return (
    <Text className="typed" data-typed-items="Digital Product Designer" textDecoration={'underline'} color={'white'} fontWeight={400} fontSize={['12px', '12px', '24px', '24px']}></Text>
  );
};

export default TypewriterEffect;