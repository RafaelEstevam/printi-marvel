import { TableWrapper, Table as StyledTable, Thead, Th, Tr, Td } from "./style";

const Table = ({ list }: any) => {
  return (
    <TableWrapper>
      <StyledTable>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Last Update</Th>
          </Tr>
        </Thead>
        <tbody>
          {list.map((list: any) => (
            <Tr key={list.id}>
              <Td>{list.name}</Td>
              <Td>{list.description}</Td>
              <Td>{list.lastUpdate}</Td>
            </Tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default Table;
