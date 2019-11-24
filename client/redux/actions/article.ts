import * as actionTypes from "../action-types";
import { createActionAsync } from "../../utils/createAction";
import { SubmitArticleScheme } from "../../typings/index";

const url = "http://127.0.0.1:3000/api/v1/article";

export const fetchArticleList = (
  page: number = 1,
  page_size: number = 10,
  order: string = "desc"
) =>
  createActionAsync(
    `${url}?page=${page}&page_size=${page_size}&order=${order}`,
    actionTypes.GET_ARTICLE_LIST
  );

export const fetchArticleDetail = (id: number) =>
  createActionAsync(`${url}/${id}`, actionTypes.GET_ARTICLE_DETAIL);

export const updateArticle = (id: number, data: SubmitArticleScheme) =>
  createActionAsync(
    `${url}/${id}`,
    actionTypes.UPDATE_ARTICLE_DETAIL,
    "put",
    data,
    "修改成功"
  );

export const addArticle = (data: SubmitArticleScheme) =>
  createActionAsync(
    `${url}/`,
    actionTypes.ADD_ARTICLE,
    "post",
    data,
    "添加成功"
  );

export const deleteArticle = (id: number) =>
  createActionAsync(`${url}/${id}`, actionTypes.DELETE_ARTICLE, "delete");
