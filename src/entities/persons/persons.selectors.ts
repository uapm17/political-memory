import { RootState } from '../../store';
// import { UserAccessRecord } from './User';

export const userDataSelector = (state: RootState) => state.entities.user.userData;

/* Remove after migrate to a new access system */
// export const userAccessListSelector = createSelector(userDataSelector, (userData) => {
//     if (!userData) {
//         return [];
//     }

//     const { accesses = {} } = userData;
//     const accessList = Object.entries(accesses) as [string, UserAccessRecord][];

//     return accessList.map(([gid, access]) => ({ gid, ...access }));
// });
