// AccordionSection.jsx
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  Icon,
  Text,
} from '@chakra-ui/react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const accordionData = [
  {
    id: 1,
    question: 'What chain is $BEER on?',
    answer: '$BEER runs on SOLANA ($SOL)',
  },
  {
    id: 2,
    question: 'When is the Pre-Sale?',
    answer: '16.05.2024 at 12AM UTC',
  },
  {
    id: 3,
    question: 'Are there any discounts or rewards for Pre-Sale investors?',
    answer: 'The answer to this question.',
  },
  {
    id: 4,
    question: 'What is the Address to deposit Solana to buy $BEER?',
    answer: 'The answer to this question.',
  },
  {
    id: 5,
    question: 'How long does the Pre-Sale last?',
    answer: 'The answer to this question.',
  },
];

export const AccordionSection = () => {
  return (
    <Accordion allowToggle w="full" border="none">
      {accordionData.map((item) => (
        <AccordionItem key={item.id} border="none" mb={2}>
          {({ isExpanded }) => (
            <h2>
              <AccordionButton
                borderRadius="md"
                _hover={{ bg: 'white' }}
                bg="white"
                mb={2}
                justifyContent="space-between"
                alignItems="stretch"
                transition="background-color 0.3s ease"
                display="flex"
                flexDirection="column"
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    color="black"
                  >
                    {item.question}
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    w="44px"
                    h="44px"
                    borderRadius="md"
                    bg={isExpanded ? 'white' : '#FFD700'}
                    border="2px solid black"
                    color="black"
                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    transition="background-color 0.3s ease"
                  >
                    <Icon as={isExpanded ? FaMinus : FaPlus} />
                  </Box>
                </div>

                {isExpanded && <Text>{item.answer}</Text>}
              </AccordionButton>
            </h2>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionSection;
