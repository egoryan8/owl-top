import React from "react";
import {withLayout} from "../layout/Layout";
import Htag from "../components/Htag/Htag";
import Link from "next/link";
import Button from "../components/Button/Button";

function Error500(): JSX.Element {
  return <div className='errorWrapper'>
    <Htag tag='h1'>Возникла ошибка на сервере, повторите попытку позже.</Htag>
    <Link href='/'>
      <Button appearance='primary'>&larr; На главную</Button>
    </Link>
  </div>
}

export default withLayout(Error500);