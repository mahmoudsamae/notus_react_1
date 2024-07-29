import { Stack } from '@mui/material'
import React from 'react'
import { LanguageSection } from './ContentSection'
import { DeleteOutline, DocumentScanner, Fingerprint, Mouse } from '@mui/icons-material'

function DocumentSection() {
  
  return (
    <Stack sx={{ flexDirection: {xs: "column", md:"row"}, gap: 10 }}>
      <Stack>
        <LanguageSection
          icon={<DocumentScanner sx={{ color: "var(--title-color)" }} />}
          title={"Complex Documentation"}
          desc={
            "This extension comes a lot of fully coded examples that help you get started faster. You can adjust the colors and also the programming language. You can change the text and images and you're good to go."
          }
          list={true}
          list1={[
            <Fingerprint sx={{ color: "var(--hover-color)" }} />,
            "Built by Developers for Developers",
          ]}
          list2={[
            <DeleteOutline sx={{ color: "var(--hover-color)" }} />,
            "Carefully crafted code for Components",
          ]}
          list3={[
            <Mouse sx={{ color: "var(--hover-color)" }} />,
            "Dynamic Javascript Components",
          ]}
        />
      </Stack>
      <Stack flexGrow={1} sx={{transform: "skew(-4deg)", boxShadow: "0 0 10px rgba(0,0,0, 20%)"}}>
        <img
          src={require("../assets/img/documentation.png")}
          alt="documentation"
          style={{width: "100%", height: "100%"}}
        />
      </Stack>
    </Stack>
  );
}

export default DocumentSection