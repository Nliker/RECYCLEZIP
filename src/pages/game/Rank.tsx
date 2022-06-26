import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { getData } from "../../api";
import { loginState } from "../../stores/atoms";
import { Button } from "../../styles/ButtonStyles";
import {
  RankContainer,
  RankNameText,
  RankTitleText,
  Top3Rank,
  ScoreText,
  NumberText,
} from "../../styles/gameStyles/game";
import { RankDataType } from "../../types/Game";
import GoGameModal from "./GoGameModal";

function Rank() {
  const navigate = useNavigate();
  const isLogin = useRecoilValue(loginState);
  const [open, setOpen] = useState(false);
  const [rankList, setRankList] = useState<RankDataType[]>([]);
  const [loading, setLoading] = useState(false);
  const medal = ["🥇", "🥈", "🥉"];

  const goGame = () => {
    if (isLogin) {
      navigate("/game/play");
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    const getRank = async () => {
      try {
        const res = await getData("users/rank");
        setRankList(res.data);
        setLoading(true);
      } catch {
        console.log("get data request fail");
      }
    };
    getRank();
  }, []);

  if (!loading) {
    return <div>Loading...</div>;
  }

  return (
    <RankContainer>
      <GoGameModal open={open} setOpen={setOpen} />
      <RankTitleText>
        👑
        <br /> 게임 랭킹 <br />
        TOP 10
      </RankTitleText>
      <Button onClick={goGame}>신기록 도전</Button>
      {rankList.map((list, index) =>
        index < 3 ? (
          <Top3Rank key={index} index={index}>
            <NumberText font="1rem">{index < 4 ? medal[index] : 4}</NumberText>
            <RankNameText>{list.username}님</RankNameText>
            <ScoreText>{list.topscore}점</ScoreText>
          </Top3Rank>
        ) : (
          <Top3Rank key={index} index={index} color="#c7ebff">
            <NumberText>{index + 1}</NumberText>
            <RankNameText>{list.username}님</RankNameText>
            <ScoreText>{list.topscore}점</ScoreText>
          </Top3Rank>
        ),
      )}
    </RankContainer>
  );
}

export default Rank;
