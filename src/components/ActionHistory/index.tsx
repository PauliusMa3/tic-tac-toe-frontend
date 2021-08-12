import * as S from "./ActionHistory.style";

interface IProps {
  actionHistoryItems: string[];
}

const ActionHistory = ({ actionHistoryItems }: IProps) => {
  return (
    <S.ActionHistoryContainer>
      <h2>Game action history</h2>
      <S.ActionHistoryList>
        {actionHistoryItems.map((actionItem: string, idx: number) => (
          <p key={idx}>{actionItem}</p>
        ))}
      </S.ActionHistoryList>
    </S.ActionHistoryContainer>
  );
};

export default ActionHistory;
