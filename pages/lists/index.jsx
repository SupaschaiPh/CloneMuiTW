import HeadSearch from '../../components/HeadSearch';
import Layout from '../../components/Layout';
import Rightbar from '../../components/Rightbar';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { ButtonGroup, IconButton } from '@mui/material';
export default function List() {
  return (
    <Layout rightbar={<Rightbar />}>
      <HeadSearch
        leftIcon={
          <IconButton color="secondary">
            <ArrowBackRoundedIcon />
          </IconButton>
        }
        rightIcon={
          <ButtonGroup>
            <IconButton color="secondary">
              <PostAddRoundedIcon/>
            </IconButton>
            <IconButton color="secondary">
              <MoreHorizRoundedIcon/>
            </IconButton>
          </ButtonGroup>
        }
      />
    </Layout>
  );
}
