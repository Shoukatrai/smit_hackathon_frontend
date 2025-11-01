import { Box, Card, CardContent, Typography } from "@mui/material";

const FamilyCard = ({ member }) => {
  console.log("member", member);
  return (
    <>
      <Card
        sx={{
          minWidth: 100,
          maxWidth: 200,
          m: 2,
          borderRadius: 2,
          textAlign: "center",
          boxShadow: 2,
          ":hover": { boxShadow: 4 },
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {member?.name}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {member?.age}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {member?.gender}
          </Typography>

          <Typography variant="body2" color="text.secondary" gutterBottom>
            {member?.relation}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default FamilyCard;
