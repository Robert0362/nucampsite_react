import { Col, Row } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from './CommentForm';
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const CommentsList = ({ campsiteId }) => {
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));
    const isLoading = useSelector((state) => state.comments.isLoading);
    const errMsg = useSelector((state) => state.comments.errMsg);

    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
                <CommentForm campsiteId={campsiteId} />
            </Col>
        );
    }
    return (
        isLoading ? (<Loading />) : errMsg ? (
                <Error errMsg={errMsg} />
            ) : (
                <Col className='mt-4'>
                    <Row>
                        {comments.map((comment) => {
                                return (
                                    <div className='d-flex mb-5' key={comment.id}>
                                        <Comment comment={comment}/>
                                    </div>
                                );
                            }
                        )}
                    </Row>
                </Col>
                )
        );
    };

export default CommentsList;