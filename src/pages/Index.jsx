import { Box, Heading, Text, Flex, Stat, StatLabel, StatNumber, StatHelpText, StatGroup, Table, Thead, Tbody, Tr, Th, Td, Image } from "@chakra-ui/react";
import { FaBoxes, FaChartLine, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        관리자 대시보드
      </Heading>

      {/* 주요 통계 */}
      <StatGroup mb={8}>
        <Stat>
          <StatLabel>총 매출액</StatLabel>
          <StatNumber>₩12,670,000</StatNumber>
          <StatHelpText>
            <FaChartLine color="green.500" /> 23.36% 증가
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>총 주문수</StatLabel>
          <StatNumber>1,023</StatNumber>
          <StatHelpText>
            <FaShoppingCart color="blue.500" /> 10.12% 증가
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>재고 상품수</StatLabel>
          <StatNumber>5,670</StatNumber>
          <StatHelpText>
            <FaBoxes color="purple.500" /> 2,300개 입고 예정
          </StatHelpText>
        </Stat>
      </StatGroup>

      <Flex>
        {/* 최근 주문 내역 */}
        <Box flex={1} mr={4}>
          <Heading size="lg" mb={4}>
            최근 주문 내역
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>주문번호</Th>
                <Th>고객명</Th>
                <Th isNumeric>주문금액</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>ORD-12345</Td>
                <Td>김철수</Td>
                <Td isNumeric>₩120,000</Td>
              </Tr>
              <Tr>
                <Td>ORD-12344</Td>
                <Td>박영희</Td>
                <Td isNumeric>₩250,000</Td>
              </Tr>
              <Tr>
                <Td>ORD-12343</Td>
                <Td>이민수</Td>
                <Td isNumeric>₩80,000</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        {/* 재고 현황 */}
        <Box flex={1}>
          <Heading size="lg" mb={4}>
            재고 현황
          </Heading>
          <Flex>
            <Image src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwaW52ZW50b3J5fGVufDB8fHx8MTcxMjgyNTEwN3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="재고 현황 차트" mr={4} />
            <Box>
              <Text mb={2}>
                <strong>품절 임박 상품:</strong> 25개
              </Text>
              <Text mb={2}>
                <strong>적정 재고 상품:</strong> 3,250개
              </Text>
              <Text mb={2}>
                <strong>과다 재고 상품:</strong> 120개
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
